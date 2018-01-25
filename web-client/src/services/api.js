import _ from 'lodash/fp'
import { GraphQLClient } from 'graphql-request'

let gql = new GraphQLClient(
  'https://api.graph.cool/simple/v1/cjc0y4mb312yk0165wher7c6w',
  { headers: {} }
)

export async function fetchDialogueSummaries() {
  let query = `{
    allDialogues {
      id
      title
    }
  }`
  let data = await gql.request(query)
  return data.allDialogues
}

export async function fetchDialogue(id) {
  let query = `{
    Dialogue(id: "${id}") {
      id
      title
  		participants {
        user { name id }
        statements { text createdAt }
      }
    }
  }`
  let data = await gql.request(query)
  let dialogue = data.Dialogue
  let statements = dialogue.participants.map((p) => {
    return p.statements.map((s) => _.set('user', p.user, s))
  })
  statements = _.orderBy('createdAt', 'asc', _.flatten(statements))
  dialogue.statements = statements
  delete dialogue.participants
  return dialogue
}

export async function addStatement(dialogueId, text) {
  let mutation = `mutation {
    createStatement(
      text: "${text}"
      dialogueId: "${dialogueId}"
    ) {
      id
    }
  }`
  let data = await gql.request(mutation)
  return data.id
}
