import _ from 'lodash/fp'

export async function addDialogue(title, creatorId) {}
export async function addStatement(dialogueId, userId, text) {}
export async function authenticateUser(accessToken) {}
export async function fetchDialogue(id) {}
export async function fetchDialogueSummaries() {
  return global.__fixtures.dialogueSummaries
}
export async function fetchUser(id) {
  return global.__fixtures.users[id]
}
