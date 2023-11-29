/* 环境变量配置文件 */
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
  // DEFAULT_ADMIN_USERNAME,
  // DEFAULT_ADMIN_ACCOUNT,
  // DEFAULT_ADMIN_PASSWORD
} = process.env;
