import { Media } from 'react-bootstrap'
import h from 'react-hyperscript'
import * as t from '../types'
import { distanceInWords } from 'date-fns'

function Statement(statement: t.Statement) {
  let whenPosted = distanceInWords(statement.createdAt, new Date()) + ' ago'
  return (
    h(Media, [
      h(Media.Body, [
        h(Media.Heading, [
          h('span', statement.user.name), ' ', h('small', [h('em', whenPosted)])
        ]),
        h('p', statement.text)
      ])
    ])
  )
}

function StatementList({ statements }: { statements: t.Statements }) {
  return h('div', statements.map(Statement))
}

export default StatementList
