const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'database-1.chjgvfitvjfm.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'root1234',
  database: 'clean_service'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log("connected")
  }
});

module.exports = connection;