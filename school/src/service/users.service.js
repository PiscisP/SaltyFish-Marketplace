const connection = require('../app/database');
const { USERS_TABLE, CAR_TABLE ,NEED_TABLE,MESSAGE_TABLE} = require('../constans/service_table');
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
  //check if admin account exist
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
  async userAdminLoginData(username, password) {
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
  // update user
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
  // updae user info
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
  // update want to buy
  // async updateWantGoods(id,through){
  //   const statement = `UPDATE ${NEED_TABLE} SET through=${through} WHERE id=${id}`;
  //   const result = await connection.execute(statement,[]);
  //   return result[0];
  // } catch (err) {
  //   throw Error(err);
  // }
  // search all message
  async selectUserMessage(id){
    try {
      const statement = `SELECT * FROM ${MESSAGE_TABLE} WHERE userid=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  //Delete user info  DELETE FROM school_message WHERE userid=1
  async deleteUserMessage(id){
    try {
      const statement = `DELETE FROM ${MESSAGE_TABLE} WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // add info
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
