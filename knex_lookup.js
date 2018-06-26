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

let myArgs = process.argv[2];



knex.select('*').from('famous_people')
.where('first_name', '=', `${myArgs}`)
.orWhere('last_name', '=', `${myArgs}`)
.asCallback(function(err, rows){
    if (err) {
      return console.error(err);
    }
    let len = (rows.length);
    console.log('Found', len, 'person(s) with name', `${myArgs}`)
    rows.forEach(function(e, i){
      console.log((i+1), e.first_name, e.last_name,'born', e.birthdate.toDateString());
    })
    return knex.destroy();
  })