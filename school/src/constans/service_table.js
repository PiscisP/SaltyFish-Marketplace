/* 数据库表常量 */
const { MYSQL_PREFIX } = require('../app/config'); // 引入表前缀

// const ADMIN_USER_TABLE = `${MYSQL_PREFIX}admin`; //后台管理员表
const USERS_TABLE = `${MYSQL_PREFIX}user`;
const COMMODITY_TABLE = `${MYSQL_PREFIX}commodity`;
const CAR_TABLE = `${MYSQL_PREFIX}car`; // 购物车表
const NEED_TABLE = `${MYSQL_PREFIX}need` // 获取求购信息列表
// const  QQ_LOGIN_TABLE = `${MYSQL_PREFIX}login`
const MESSAGE_TABLE = `${MYSQL_PREFIX}message`// 获取消息表
module.exports = {
  // ADMIN_USER_TABLE,
  USERS_TABLE,
  COMMODITY_TABLE,
  CAR_TABLE,
  NEED_TABLE,
  // QQ_LOGIN_TABLE,
  MESSAGE_TABLE
};
