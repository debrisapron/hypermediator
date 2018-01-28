import * as b from 'react-bootstrap'
import h from 'react-hyperscript'
import * as dateFns from 'date-fns'

function Statement(statement) {
  let whenPosted = dateFns.distanceInWords(statement.createdAt, new Date()) + ' ago'
  return (
    h(b.Media, [
      h(b.Media.Body, [
        h(b.Media.Heading, [
          h('span', statement.user.name), ' ', h('small', [h('em', whenPosted)])
        ]),
        h('p', statement.text)
      ])
    ])
  )
}

function StatementList({ statements }) {
  return h('div', statements.map(Statement))
}

export default StatementList
