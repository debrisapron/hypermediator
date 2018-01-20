let seedTable = require('./helpers/seedTable')

let seed = seedTable('users', [
  { id: 'user1', username: 'debrisapron', email: 'debrisapron@gmail.com' },
  { id: 'user2', username: 'Simon Break', email: 'ghostfunk@gmail.com' }
])

module.exports = { seed }
