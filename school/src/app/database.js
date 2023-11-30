/* SQL related operations are in the service folder */

const mysql = require('mysql2');
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  CONNECTIONLIMIT
} = require('./config');

const connections = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  database: MYSQL_DATABASE,
  password: MYSQL_PASSWORD,
  connectionLimit: CONNECTIONLIMIT
});

// Only exists in development mode
// connections.getConnection((err, conn) => {
//   conn.connect((err) => {
//     if (err) {
//       console.log('MySql database connection failed:', err);
//     } else {
//       console.log('MySql database connection successful');
//     }
//   });
// });

module.exports = connections.promise();
