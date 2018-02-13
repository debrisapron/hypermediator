import _ from 'lodash/fp'
import { GraphQLClient } from 'graphql-request'

let _gql

function gql() {
  return _gql || (
    _gql = new GraphQLClient(
      'https://api.graph.cool/simple/v1/cjc0y4mb312yk0165wher7c6w',
      { headers: {} }
    )
  )
}

function request(...args) {
  return gql().request(...args)
}

export async function addDialogue(title, creatorId) {
  let mutation = `mutation {
    createDialogue(
      title: "${title}"
      participants: [{
        userId: "${creatorId}"
      }]
    ) {
      id
    }
  }`
  let data = await gql().request(mutation)
  return data.createDialogue.id
}

let ADD_STATEMENT_GQL = `
  mutation($participantId: ID!, $text: String!) {
    createStatement(
      participantId: $participantId
      text: $text
    ) {
      id
      text
      createdAt
    }
  }`

export async function addStatement(dialogueId, userId, text) {
  let participantId = await fetchParticipantId(dialogueId, userId)
  let data = await request(ADD_STATEMENT_GQL, { participantId, text })
  return data.createStatement
}

export async function authenticateUser(accessToken) {
  let mutation = `mutation {
    authenticateUser(accessToken: "${accessToken}") {
      id
      token
    }
  }`
  let data = await gql().request(mutation)
  return data.authenticateUser
}

export async function fetchDialogue(id) {
  let query = `{
    Dialogue(id: "${id}") {
      id
      title
  		participants {
        user { name id avatar }
        statements { text createdAt }
      }
    }
  }`
  let data = await gql().request(query)
  let dialogue = data.Dialogue
  let statements = dialogue.participants.map((p) => {
    return p.statements.map((s) => _.set('user', p.user, s))
  })
  statements = _.orderBy('createdAt', 'asc', _.flatten(statements))
  dialogue.statements = statements
  delete dialogue.participants
  return dialogue
}

export async function fetchDialogueSummaries() {
  let query = `{
    allDialogues {
      id
      title
    }
  }`
  let data = await gql().request(query)
  return data.allDialogues
}

let FETCH_PARTICIPANT_ID_GQL = `
  query($dialogueId: ID!, $userId: ID!) {
    allParticipants(filter: { AND: [
      { dialogue: { id: $dialogueId } },
      { user: { id: $userId } }
    ] }) {
      id
    }
  }`

async function fetchParticipantId(dialogueId, userId) {
  let data = await request(FETCH_PARTICIPANT_ID_GQL, { dialogueId, userId })
  let participants = data.allParticipants
  if (!participants.length) {
    throw new Error('Dialogue participant not found!')
  }
  if (participants.length > 1) {
    throw new Error('Duplicate participant records found!')
  }
  return participants[0].id
}

export async function fetchUser(id) {
  let query = `{
    User(id: "${id}") {
      id
      name
      avatar
    }
  }`
  let data = await gql().request(query)
  return data.User
}
