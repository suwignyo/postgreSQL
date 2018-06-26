const db = require('./db.util.js')

const all = (cb) => {
  // db.runQuery(`SELECT * FROM users`, (err, results) => {
  //   if (err) {
  //     console.error('Found an error', err)
  //     return cb(err, null)
  //   }
  //
  //   cb(null, results)
  // })

  db.runQuery(`SELECT * FROM famous_people`, cb)
}

// const insert = (user, cb) => {
//   if (!user.name || !user.email) {
//     const err = new Error('Missing name or email')
//     return cb(err, null)
//   }

//   db.runQuery(`
//       INSERT INTO
//         users (id, name, email)
//         values (DEFAULT, '${user.name}', '${user.email}')
//     `, cb)
// }

module.exports = {
  all,
  insert,
}
