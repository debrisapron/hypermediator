'use strict'

let Db = () => {
  return {
    users: [
      { id: 'user1', username: 'debrisapron', email: 'debrisapron@gmail.com' },
      { id: 'user2', username: 'Simon Break', email: 'ghostfunk@gmail.com' }
    ],
    dialogues: [
      { id: 'dialogue1', title: 'Beans v Peas' }
    ],
    statements: [
      { id: 'statement1', userId: 'user1', dialogueId: 'dialogue1', ordinal: 0, text: "You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic." },
      { id: 'statement2', userId: 'user2', dialogueId: 'dialogue1', ordinal: 1, text: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing." }
    ],
    dialogueUsers: [
      { userId: 'user1', dialogueId: 'dialogue1' },
      { userId: 'user2', dialogueId: 'dialogue1' }
    ]
  }
}

module.exports = Db