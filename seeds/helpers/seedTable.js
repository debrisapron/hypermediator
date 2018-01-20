let seedTable = (tableName, rows) => {
  return (db) => {
    return db(tableName)
      .del()
      .then(() => Promise.all(rows.map((r) => db(tableName).insert(r))))
  }
}

module.exports = seedTable
