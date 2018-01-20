import _ from 'lodash/fp'
import { GraphQLClient } from 'graphql-request'
import * as t from '../types'

let gql = new GraphQLClient(
  'https://api.graph.cool/simple/v1/cjc0y4mb312yk0165wher7c6w',
  { headers: {} }
)

export async function fetchDialogueSummaries(): Promise<t.DialogueSummaries> {
  let query = `{
    allDialogues {
      id
      title
    }
  }`
  let data = await gql.request(query) as { allDialogues: t.DialogueSummaries }
  return data.allDialogues
}

export async function fetchDialogue(id: string): Promise<t.Dialogue> {
  let query = `{
    Dialogue(id: "${id}") {
      title
  		participants {
        user { name id }
        statements { text createdAt }
      }
    }
  }`
  let data: any = await gql.request(query)
  let dialogue = data.Dialogue
  let statements = dialogue.participants.map((p: any) => {
    return p.statements.map((s: any) => _.set('user', p.user, s))
  })
  statements = _.orderBy('createdAt', 'asc', _.flatten(statements))
  dialogue.statements = statements
  delete dialogue.participants
  return dialogue
}

export async function addStatement(dialogueId: string, text: string): Promise<string> {
  let mutation = `mutation {
    createStatement(
      text: "${text}"
      dialogueId: "${dialogueId}"
    ) {
      id
    }
  }`
  let data = await gql.request(mutation) as { id: string }
  return data.id
}
