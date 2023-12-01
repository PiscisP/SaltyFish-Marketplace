/* Database table constants */
const { MYSQL_PREFIX } = require('../app/config'); // Introduce table prefix

// const ADMIN_USER_TABLE = `${MYSQL_PREFIX}admin`; //Backend administrator table
const USERS_TABLE = `${MYSQL_PREFIX}user`;
const COMMODITY_TABLE = `${MYSQL_PREFIX}commodity`;
const CAR_TABLE = `${MYSQL_PREFIX}car`; // shopping cart table
const NEED_TABLE = `${MYSQL_PREFIX}need` // Get Want-to-buy information
module.exports = {
  USERS_TABLE,
  COMMODITY_TABLE,
  CAR_TABLE,
  NEED_TABLE,
 };
