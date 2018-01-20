module.exports = {
  up: (db) => {
    return Promise.all([
      db.schema.createTable('users', (tbl) => {
        tbl.string('id', 14).primary()
        tbl.string('username', 30).unique().notNullable()
        tbl.string('email').unique().notNullable()
      }),
      db.schema.createTable('dialogues', (tbl) => {
        tbl.string('id', 14).primary()
        tbl.string('title', 100).notNullable()
      }),
      db.schema.createTable('statements', (tbl) => {
        tbl.string('id', 14).primary()
        tbl.string('user_id', 14).notNullable().references('users.id')
        tbl.string('dialogue_id', 14).notNullable().references('dialogues.id')
        tbl.timestamp('created_at', true).notNullable().defaultTo(db.fn.now())
        tbl.string('text', 500).notNullable()
      }),
      db.schema.createTable('dialogue_users', (tbl) => {
        tbl.string('user_id', 14).notNullable().references('users.id')
        tbl.string('dialogue_id', 14).notNullable().references('dialogues.id')
        tbl.primary(['user_id', 'dialogue_id'])
      })
    ])
  },
  down: () => {}
}