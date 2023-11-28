const connection = require('../app/database');
const { ADMIN_USER_TABLE ,QQ_LOGIN_TABLE} = require('../constans/service_table');
class adminService {
  // 查询管理员账户是否存在
  async inquireAdminData(username) {
    const statement = `SELECT * FROM ${ADMIN_USER_TABLE} WHERE username = ?`;
    try {
      const result = await connection.execute(statement, [username]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 创建管理员
  async createAdminData(username, password) {
    const statement = `INSERT INTO ${ADMIN_USER_TABLE} (username,password) VALUES (?,?)`;
    try {
      const result = await connection.execute(statement, [username, password]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // qq 登录
  async qq_login_service(qq){
    const statement  = `INSERT INTO ${QQ_LOGIN_TABLE} (qq) VALUES (?)`;
    try {
      const result = await connection.execute(statement, [qq]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 删除数据
  async delData(){
    const statement = `truncate  table ${QQ_LOGIN_TABLE}`;
    try {
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 查询登录
  async isLogin(){
    const statement = `SELECT * FROM ${QQ_LOGIN_TABLE}`;
    try {
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = new adminService();
