import h from 'react-hyperscript'
import * as dateFns from 'date-fns'

function Statement(statement) {
  let whenPosted = dateFns.distanceInWords(statement.createdAt, new Date()) + ' ago'
  return (
    h('div.row.hm-statement', [
      h('div.two.columns', [
        h('img.hm-avatar', { src: statement.user.avatar })
      ]),
      h('div.ten.columns', [
        h('h6', [
          h('a', statement.user.name), ' ', h('small', whenPosted)
        ]),
        h('div.hm-speech-bubble', [h('p', statement.text)])
      ])
    ])
  )
}

function StatementList({ statements }) {
  return h('div.container', statements.map(Statement))
}

export default StatementList
