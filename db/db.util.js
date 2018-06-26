const config = require('../config')
const { Pool, Client } = require('pg')

const client = new Pool(config.postgres)

/**
 * A generic method to run any query against
 * the database.
 */
const runQuery = (queryStatement, cb) => {
  client.query(queryStatement, (err, results) => {
    if (err) {
      console.error(err)
      return cb(err, null)
    }

    // client.release(true)
    cb(null, results)
  })
}

module.exports = {
  client,
  runQuery,
}
