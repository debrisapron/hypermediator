'use strict'
let _ = require('lodash/fp')
let shortid = require('shortid')

let create = (db, attrs) => {
  attrs = _.pick(['username', 'email'], attrs)
  let newUser = _.merge({ id: shortid.generate() }, attrs)
  db.users.push(newUser)
  return Promise.resolve(_.cloneDeep(newUser))
}

let find = (db, id) => db.first().from('users').where({ id })

let findByUsername = (db, username) => db.first().from('users').where({ username })

let findByEmail = (db, email) => {
  email = (email || '').trim().toLowerCase()
  return Promise.resolve(_.cloneDeep(db.users.find((u) => u.email === email)))
}

module.exports = { create, find, findByEmail, findByUsername }