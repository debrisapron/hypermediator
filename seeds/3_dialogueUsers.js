let seedTable = require('./helpers/seedTable')

let seed = seedTable('dialogue_users', [
  { user_id: 'user1', dialogue_id: 'dialogue1' },
  { user_id: 'user2', dialogue_id: 'dialogue1' }
])

module.exports = { seed }
