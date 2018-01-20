'use strict'
let _ = require('lodash/fp')
let shortid = require('shortid')
let camelize = require('camelize')
let users = require('./users')

let create = (db, { userId, invitedUsername, openingStatementText, title }) => {
  let dialogue = { title, id: shortid.generate() }
  let statement = {
    dialogue_id: dialogue.id,
    id: shortid.generate(),
    text: openingStatementText,
    user_id: userId
  }
  return Promise.all([
    db.insert(dialogue).into('dialogues'),
    users.findByUsername(db, invitedUsername)
  ])
    .then(([, { id: invitedUserId }]) => {
      let dialogueUsers = [
        { dialogue_id: dialogue.id, user_id: userId },
        { dialogue_id: dialogue.id, user_id: invitedUserId }
      ]
      return Promise.all([
        db.insert(statement).into('statements'),
        db.insert(dialogueUsers).into('dialogue_users')
      ])
    })
    .then(() => dialogue.id)
}

let addStatement = (db, { dialogueId, text, userId }) => {
  let statement = {
    text,
    dialogue_id: dialogueId,
    id: shortid.generate(),
    user_id: userId
  }
  return db
    .insert(statement)
    .into('statements')
    .then(() => statement.id)
}

let find = (db, id) => {
  return Promise.all([
    db.first().from('dialogues').where({ id }),
    db
      .select('*')
      .from('statements')
      .where({ dialogue_id: id })
      .orderBy('created_at')
      .then(camelize),
    db
      .select('u.*')
      .from('users AS u')
      .innerJoin('dialogue_users AS du', { 'du.user_id': 'u.id' })
      .where({ 'du.dialogue_id': id })
  ]).then(denorm)
}

let hot = (db) => {
  return db
    .select('d.id', 'd.title', 'u.username', 'u.id AS user_id')
    .from('dialogues AS d')
    .innerJoin('dialogue_users AS du', { 'du.dialogue_id': 'd.id' })
    .innerJoin('users AS u', { 'u.id': 'du.user_id' })
    .then((rows) => {
      let groups = Object.values(_.groupBy('id', rows))
      return groups.map((group) => {
        return {
          id: group[0].id,
          title: group[0].title,
          users: group.map(({ user_id: id, username }) => ({ id, username }))
        }
      })
    })
}

let denorm = ([dialogue, statements, users]) => {
  if (!dialogue) return null
  dialogue.users = users
  dialogue.statements = statements.map((s) => {
    let user = users.find((u) => u.id === s.userId)
    return _.set('user', user, s)
  })
  return dialogue
}

module.exports = { addStatement, create, find, hot }