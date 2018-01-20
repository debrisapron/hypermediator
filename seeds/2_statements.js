let seedTable = require('./helpers/seedTable')

let seed = seedTable('statements', [
  { id: 'statement1', user_id: 'user1', dialogue_id: 'dialogue1', created_at: '2017-01-01T01:00:00.000Z', text: "You see? It's *curious*. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means **we never told anyone**. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic." },
  { id: 'statement2', user_id: 'user2', dialogue_id: 'dialogue1', created_at: '2017-01-01T02:00:00.000Z', text: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing." }
])

module.exports = { seed }
