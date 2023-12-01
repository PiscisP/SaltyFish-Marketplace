const connection = require('../app/database');
const { USERS_TABLE, CAR_TABLE ,NEED_TABLE} = require('../constans/service_table');
class UsersService {
  //user register
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
  //check if account exist
  async inquireusernameData(username) {
    const statement = `SELECT * FROM ${USERS_TABLE} WHERE username = ?`;
    try {
      const result = await connection.execute(statement, [username]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // add to shopping car
  async createCommodityCarData(userId, commodityId) {
    try {
      const statement = `INSERT INTO ${CAR_TABLE} (userId,commodityId) VALUE (?,?)`;
      const result = await connection.execute(statement, [userId, commodityId]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // user login
  async userLoginData(username, password) {
    try {
      const statement = `SELECT * FROM ${USERS_TABLE} WHERE username = ? AND password = ?`;
      const result = await connection.execute(statement, [username, password]);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // search all users
  async allUser(){
    try {
      const statement = `SELECT id,username,school,phone,introduction,createAt,gender FROM ${USERS_TABLE}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }

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
}

module.exports = new UsersService();
