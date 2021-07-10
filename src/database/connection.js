import mysql from 'mysql';
const data = require('./data');

const objectConnection = {

  host : data.mysql.host,
  port : data.mysql.port,
  user : data.mysql.user,
  password : data.mysql.pass,
  database : data.mysql.database
}

const myConfig = mysql.createConnection(objectConnection);

myConfig.connect((err) => {

  if (err) {

    console.log(`there was an error: ${err}`);
  } else {

    console.log("database connected successfully");
  }
});

module.exports = myConfig;
