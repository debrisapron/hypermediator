'use strict'
let touch = require('touch')
let App = require('../app/App')

let OPTS = {
  port: 8080,
  host: process.env.IP,
  data: { db: 'development' },
  secret: '42'
}

App(OPTS, () => touch('.app-ready'))
