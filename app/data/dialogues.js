'use strict'
let _ = require('lodash/fp')
let shortid = require('shortid')

let create = (db, attrs) => {
  let dialogue = _.merge({ id: shortid.generate() }, _.pick('title', attrs))
  db.dialogues.push(dialogue)
  
  let statement = {
    id: shortid.generate(),
    userId: attrs.creatorId,
    dialogueId: dialogue.id,
    text: attrs.openingStatementText
  }
  db.statements.push(statement)
  
  db.dialogueUsers.push({ dialogueId: dialogue.id, userId: attrs.creatorId })
  let invitedUserId = db.users.find((u) => u.username === attrs.invitedUsername).id
  db.dialogueUsers.push({ dialogueId: dialogue.id, userId: invitedUserId })
  
  return find(db, dialogue.id)
}

let find = (db, id) => {
  let findUser = (uId) => _.cloneDeep(db.users.find((u) => u.id === uId))
  let dialogue = _.cloneDeep(db.dialogues.find((d) => d.id === id))
  if (!dialogue) return null
  dialogue.users = db.dialogueUsers
    .filter((du) => du.dialogueId === dialogue.id)
    .map((du) => findUser(du.userId))
  dialogue.statements = _.sortBy(
    'ordinal',
    db.statements
      .filter((s) => s.dialogueId === dialogue.id)
      .map((s) => _.set('user', findUser(s.userId), s))
  )
  return Promise.resolve(dialogue)
}

// let findByEmail = (db, email) => {
//   email = (email || '').trim().toLowerCase()
//   return Promise.resolve(db.users.find((u) => u.email === email))
// }

module.exports = { create, find }