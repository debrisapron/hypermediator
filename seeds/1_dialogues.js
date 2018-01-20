let seedTable = require('./helpers/seedTable')

let seed = seedTable('dialogues', [
  { id: 'dialogue1', title: 'Beans v Peas' }
])

module.exports = { seed }
