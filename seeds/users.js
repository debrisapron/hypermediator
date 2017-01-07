let USERS = [
  { id: 'user1', name: 'debrisapron', email: 'debrisapron@gmail.com' },
  { id: 'user2', name: 'Simon Break', email: 'ghostfunk@gmail.com' }
]

let seed = (db) => {
  return db('users')
    .del()
    .then(() => Promise.all(USERS.map((u) => db('users').insert(u))))
}

module.exports = { seed }
