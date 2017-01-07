module.exports = {
  up: (db) => {
    return db.schema.createTable('users', (tbl) => {
      tbl.string('id', 14).primary()
      tbl.string('name', 30).unique().notNullable()
      tbl.string('email').unique().notNullable()
    })
  },
  down: () => {}
}