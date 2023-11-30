const connection = require('../app/database');
const { USERS_TABLE, CAR_TABLE ,NEED_TABLE,MESSAGE_TABLE} = require('../constans/service_table');
class UsersService {
  //用户注册
  async createUserData(
    username,
    password,
    gender,
    age,
    school,
    phone,
    introduction
  ) {
    const statement = `INSERT INTO ${USERS_TABLE} (username,password,gender,age,school,phone,introduction) VALUE (?,?,?,?,?,?,?)`;
    try {
      const result = await connection.execute(statement, [
        username,
        password,
        gender,
        age,
        school,
        phone,
        introduction
      ]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  //查询管理员账户是否存在
  async inquireusernameData(username) {
    const statement = `SELECT * FROM ${USERS_TABLE} WHERE username = ?`;
    try {
      const result = await connection.execute(statement, [username]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 加入购物车
  async createCommodityCarData(userId, commodityId) {
    try {
      const statement = `INSERT INTO ${CAR_TABLE} (userId,commodityId) VALUE (?,?)`;
      const result = await connection.execute(statement, [userId, commodityId]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 用户登录
  async userAdminLoginData(username, password) {
    try {
      const statement = `SELECT * FROM ${USERS_TABLE} WHERE username = ? AND password = ?`;
      const result = await connection.execute(statement, [username, password]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 查询所有用户
  async allUser(){
    try {
      const statement = `SELECT id,username,school,phone,introduction,createAt,gender FROM ${USERS_TABLE}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 更新用户
  async userGender(id,gender){
    // ;
    try {
      const statement = `UPDATE ${USERS_TABLE} SET gender=${gender} WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      console.log(result[0]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 更新用户信息
  async updateUserInfo(id,school,phone,introduction){
    try {
      const statement = `UPDATE ${USERS_TABLE} SET school="${school}" , phone="${phone}" , introduction="${introduction}" WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      console.log(result[0]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 更新求购商品
  // async updateWantGoods(id,through){
  //   const statement = `UPDATE ${NEED_TABLE} SET through=${through} WHERE id=${id}`;
  //   const result = await connection.execute(statement,[]);
  //   return result[0];
  // } catch (err) {
  //   throw Error(err);
  // }
  // 查询所有消息
  async selectUserMessage(id){
    try {
      const statement = `SELECT * FROM ${MESSAGE_TABLE} WHERE userid=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 删除用户信息DELETE FROM school_message WHERE userid=1
  async deleteUserMessage(id){
    try {
      const statement = `DELETE FROM ${MESSAGE_TABLE} WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // 新增信息
  async createMessage(userid,message) {
    try {
      const statement = `INSERT INTO ${MESSAGE_TABLE} VALUE (null,${userid},"${message}",NOW())`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = new UsersService();
