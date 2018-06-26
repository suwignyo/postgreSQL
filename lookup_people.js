const pg = require("pg");
const settings = require("./settings"); // settings.json
var myArgs = process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function searchUser (user,cb){
  client.query(
    `SELECT *
       FROM famous_people
       WHERE first_name = '${myArgs}' OR last_name = '${myArgs}'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    let len = (result.rows.length);
    console.log('Found', len, 'person(s) with name', `${myArgs}`)
    result.rows.forEach(function(e, i){
      console.log((i+1), e.first_name, e.last_name,'born', e.birthdate.toDateString());
    })
    client.end();
  });
}
client.connect((err) => {
  console.log("Searching...")
  if (err) {
    return console.error("Connection Error", err);
  }
  searchUser(myArgs)
});