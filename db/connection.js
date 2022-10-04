const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Brayden1',
      database: 'election'
    },
    console.log('connected to election database')
  );

  module.exports = db