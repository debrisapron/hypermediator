'use strict'

let reader = (read) => {
  return (...args) => {
    let db = args[0]
    let id = args[1]
    let cachedData = db.cache.get(id)
    if (cachedData !== undefined) return Promise.resolve(cachedData)
    return read(...args).then((data) => {
      db.cache.set(id, data)
      return data
    })
  }
}

module.exports = { reader }
