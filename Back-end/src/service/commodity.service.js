const connection = require('../app/database');
const { COMMODITY_TABLE, CAR_TABLE ,NEED_TABLE,USERS_TABLE} = require('../constans/service_table');
class CommodityService {
  // Post item
  async createCommodity(userId,seller, phone, price, image, type,address, title, description) {
    const statement = `INSERT INTO ${COMMODITY_TABLE} VALUE (null,"${description}","${title}","${type}","${image}",${price},NOW(),"${address}",${userId},1,"${seller}",1)`;
    try {
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // Search exist items
  async inquireCommodityListData() {
    try {
      const statement = `SELECT n.id,title,description,image,price,address,n.userId,u.phone,type,n.createAt,recommend,seller,isrelease FROM ${COMMODITY_TABLE} as n , ${USERS_TABLE} as u where n.userId = u.id`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // edit items
  async updateCommodityListData(id,recommend) {
    try {
      const statement = `UPDATE ${COMMODITY_TABLE} SET recommend=${recommend} WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  //  Delete items
  async deleteCommodityListData(id) {
    try {
      const statement = `DELETE FROM ${COMMODITY_TABLE} WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // Search item in shopping car
  async inquireCommodityCarListData() {
    try {
      const statement = `SELECT n.id,name,goods,address,phone,school,create_time FROM ${NEED_TABLE} as n , ${USERS_TABLE} as u where n.userId = u.id`;
      const result = await connection.execute(statement);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
  // Search all want to buy
  async selectAllGoods(){
      const statement = `SELECT n.id,name,goods,address,phone,n.userid,school,create_time,through FROM ${NEED_TABLE} as n , ${USERS_TABLE} as u where n.userId = u.id`;
      const result = await connection.execute(statement,[]);
      console.log(result);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
//Create Want to buy
  async createWantToBuyGoods(userid, name, goods, address) {
    const statement = `INSERT INTO ${NEED_TABLE} VALUES (null,"${name}","${goods}","${address}","${userid}",now(),1)`;
    try {
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }

  //  delete want to buy
  async deleteWantBuyListData(id) {
    try {
      const statement = `DELETE FROM ${NEED_TABLE} WHERE id=${id}`;
      const result = await connection.execute(statement, []);
      return result[0];
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = new CommodityService();
