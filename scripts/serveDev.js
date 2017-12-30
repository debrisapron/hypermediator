'use strict'
let touch = require('touch')
let App = require('../app/App')
let Db = require('../app/data/Db')

let OPTS = {
  port: 8080,
  db: Db('development'),
  secret: '42'
}

App(OPTS, () => touch('.app-ready'))
