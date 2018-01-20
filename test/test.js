let test = require('tape')
let jsdom = require('jsdom')
let knex = require('knex')
let knexfile = require('../knexfile')
let App = require('../app/App')

let PORT = 8881
let ROOT = `http://localhost:${ PORT }`

let testServer
let db
let transaction
let resolveTransaction

let routeTest = (url, msg, cb) => {
  test(msg, (assert) => {
    jsdom.env({
      url,
      agentOptions: { keepAlive: false },

      done: (err, win) => {
        if (err) throw err
        cb(win, assert)
        win.close()
        assert.end()
      }
    })
  })
}

test('can start server', (assert) => {
  db = knex(knexfile.test)
  db.transaction((trx) => {
    transaction = trx
    App({
      db: trx,
      port: PORT,
      secret: 42,
    }, (err, server) => {
      assert.notOk(err, 'server should start without errors')
      testServer = server
      assert.end()
    })
    return new Promise((resolve) => resolveTransaction = resolve)
  })
})

routeTest(ROOT, 'can get homepage', (win, assert) => {
  let h1 = win.document.querySelector('h1')
  assert.equal(h1.textContent, 'Welcome to HYPERMEDIATOR', 'should have expected heading')
  let dialogueSummary = win.document.querySelector('.hm-hot-dialogue-list li')
  assert.equal(dialogueSummary.querySelector('a').textContent, 'Beans v Peas', 'should have expected hot dialogue title')
  assert.equal(dialogueSummary.querySelector('em').textContent, 'debrisapron & Simon Break', 'should have expected hot dialogue credits')
})

routeTest(`${ ROOT }/login`, 'can get login page', (win, assert) => {
  let h1 = win.document.querySelector('h1')
  assert.equal(h1.textContent, 'Login', 'should have expected heading')
})

test.onFinish(() => {
  testServer.close()
  resolveTransaction()
})
