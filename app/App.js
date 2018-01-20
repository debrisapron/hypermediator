'use strict'
let _ = require('lodash/fp')
let express = require('express')
let bodyParser = require('body-parser')
let expressReactViews = require('express-react-views')
let expressSession = require('express-session')
let passwordless = require('passwordless')
let PasswordlessMemoryStore = require('passwordless-memorystore')
let users = require('./data/users')
let dialogues = require('./data/dialogues')

// Global config
require('showdown').setFlavor('github')

let App = ({ db, port, secret }, cb) => {
  let app = express()

  //// Renderer setup ////

  app.set('views', __dirname + '/views')
  app.set('view engine', 'jsx')
  app.engine('jsx', expressReactViews.createEngine())

  //// Passwordless setup ////

  // TODO DELETE
  let tokenUrl
  passwordless.init(new PasswordlessMemoryStore(), {
    userProperty: 'currentUserId'
  })
  passwordless.addDelivery((tokenToSend, uidToSend, recipient, cb, req) => {
    console.log(tokenToSend, uidToSend, recipient)
    let url = `accept_token?token=${ tokenToSend }&uid=${ encodeURIComponent(uidToSend) }`
    if (req.query.origin) url += `&redirect=${ req.query.origin }`
    console.log(`https://hypermediator-debrisapron.c9users.io/${ url }`)
    tokenUrl = url
    cb()
  })

  //// Middlewares ////

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(expressSession({ secret: secret, saveUninitialized: false, resave: false }))
  app.use(passwordless.sessionSupport())

  app.use((req, res, next) => {
    req.currentUserId = 'user1'
    next()
  })

  let requestToken = passwordless.requestToken(
    (email, delivery, cb) => {
      users.findByEmail(db, email).then((user) => {
        cb(null, user && user.id)
      })
    },
    { userField: 'email' }
  )

  let getContext = (req, res, next) => {
    users.find(db, req.currentUserId).then((user) => {
      req.context = { user, url: req.url }
      next()
    })
  }

  //// Routes ////

  // Auth routes
  app.get('/register',
    (req, res) => res.render('Register')
  )
  app.post('/register',
    (req, res, next) => {
      users.create(db, req.body).then(() => next())
    },
    requestToken,
    (req, res) => res.redirect('/token_sent')
  )
  app.get('/login',
    (req, res) => res.render('Login')
  )
  app.post('/login',
    requestToken,
    (req, res) => res.redirect('/token_sent')
  )
  app.get('/token_sent',
    (req, res) => res.render('TokenSent', { tokenUrl })
  )
  app.get('/accept_token',
    passwordless.acceptToken(),
    (req, res) => res.redirect(req.query.redirect || '/')
  )
  app.get('/logout',
    passwordless.logout(),
  	(req, res) => res.redirect('/')
  )
// app.get('/me',
  //   passwordless.restricted({
  //     failureRedirect: '/login',
  //     originField: 'origin'
  //   }),
  //   (req, res) => res.send(`<p>You are ${ req.user }</p>`)
  // )

  // Dialogue routes
  app.get('/dialogues/new',
    getContext,
    (req, res) => res.render('StartDialogue', { context: req.context })
  )
  app.post('/dialogues/new',
    (req, res) => {
      let attrs = _.cloneDeep(req.body)
      attrs.userId = req.currentUserId
      dialogues.create(db, attrs)
        .then((dialogueId) => res.redirect(`/dialogues/${ dialogueId }`))
    }
  )
  app.get('/dialogues/:id',
    getContext,
    (req, res) => {
      dialogues.find(db, req.params.id).then((dialogue) => {
        res.render('Dialogue', { dialogue, context: req.context })
      })
    }
  )
  app.post('/dialogues/:id',
    (req, res) => {
      let attrs = _.cloneDeep(req.body)
      attrs.userId = req.currentUserId
      attrs.dialogueId = req.params.id
      dialogues.addStatement(db, attrs)
        .then(() => res.redirect(`/dialogues/${ req.params.id }`))
    }
  )

  // Home
  app.get('/',
    getContext,
    (req, res) => {
      dialogues.hot(db).then((hotDialogues) => {
        res.render('Index', { hotDialogues, context: req.context })
      })
    }
  )

  // Server
  let server = app.listen(port, (err) => {
    if (err) throw err
    const host = server.address().address
    console.log(`Speakual server listening at http://${ host }:${ port }`)
    if (cb) cb(null, server)
  })

  return app
}

module.exports = App
