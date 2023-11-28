/* 这里数据库连接暂时用的mysql2 暂未考虑介入ORM 用的是原生SQL语句 如果有兴趣的小伙伴可以自己重构一下SQL语句 */
/* SQL相关操作在service文件夹 */

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

// 仅开发模式存在
connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('MySql数据库连接失败：', err);
    } else {
      console.log('MySql数据库连接成功');
    }
  });
});

module.exports = connections.promise();
