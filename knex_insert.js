const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

let myArgs = process.argv.slice(2);


knex('famous_people')
.insert(
  {first_name: myArgs[0],
   last_name: myArgs[1],
   birthdate: myArgs[2]})
.asCallback(function()
  {
});
