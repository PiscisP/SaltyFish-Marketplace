/* Environment variable configuration file */
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_PREFIX,
  MYSQL_INSTALL,
  CONNECTIONLIMIT,
} = process.env;
