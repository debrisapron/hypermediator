'use strict'
let knex = require('knex')
let knexfile = require('../../knexfile')
let Lru = require("lru-cache")

let CACHE_CONFIG = { max: 1000 }

let Db = (env = process.env.NODE_ENV) => {
  let db = knex(knexfile.development)
  db.cache = Lru(CACHE_CONFIG)
  return db
}

module.exports = Db