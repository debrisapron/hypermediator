import _ from 'lodash/fp'
import { GraphQLClient } from 'graphql-request'

let API_URL = 'https://api.graph.cool/simple/v1/cjc0y4mb312yk0165wher7c6w'
let gql

function request(...args) {
  gql = gql || new GraphQLClient(API_URL, { headers: {} })
  return gql.request(...args)
}

let ADD_DIALOGUE_GQL = `
  mutation($title: String!, $creatorId: ID!) {
    createDialogue(
      title: $title
      participants: [{
        userId: $creatorId
      }]
    ) {
      id
    }
  }`

export async function addDialogue(title, creatorId) {
  let data = await request(ADD_DIALOGUE_GQL, { title, creatorId })
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

let AUTHENTICATE_USER_GQL = `
  mutation($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }`

export async function authenticateUser(accessToken) {
  let data = await request(AUTHENTICATE_USER_GQL, { accessToken })
  return data.authenticateUser
}

let FETCH_DIALOGUE_GQL = `
  query($id: ID!) {
    Dialogue(id: $id) {
      id
      title
      participants {
        user { name id avatar }
        statements { text createdAt }
      }
    }
  }`

export async function fetchDialogue(id) {
  let data = await request(FETCH_DIALOGUE_GQL, { id })
  let dialogue = data.Dialogue
  let statements = dialogue.participants.map((p) => {
    return p.statements.map((s) => _.set('user', p.user, s))
  })
  statements = _.orderBy('createdAt', 'asc', _.flatten(statements))
  dialogue.statements = statements
  delete dialogue.participants
  return dialogue
}

let FETCH_DIALOGUE_SUMMARIES_GQL = `
  query {
    allDialogues {
      id
      title
    }
  }`

export async function fetchDialogueSummaries() {
  let data = await request(FETCH_DIALOGUE_SUMMARIES_GQL)
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

let FETCH_USER_GQL = `
  query($id: ID!) {
    User(id: $id) {
      id
      name
      avatar
    }
  }`

export async function fetchUser(id) {
  let data = await request(FETCH_USER_GQL, { id })
  return data.User
}
