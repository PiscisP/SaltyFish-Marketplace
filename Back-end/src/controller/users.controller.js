const {
  createUserData,
  createCommodityCarData,
  userLoginData,
  allUser,
} = require('../service/users.service');
const errorFunction = require('../app/error-function');
class UsersController {

  // Create new account
  async createUser(ctx, next) {
    const { username, password, gender, age, school, phone, introduction } =
      ctx.request.body;
    try {
      const result = await createUserData(
        username,
        password,
        gender,
        age,
        school,
        phone,
        introduction
      );
      const { insertId } = result;
      //return logic
      ctx.body = {
        code: 200,
        message: `${username}，Welcome to the market！`,
        success: true,
        data: {
          id: insertId,
          username
        }
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // add to shopping cart
  async createCommodityCar(ctx, next) {
    const { userId, commodityId } = ctx.request.body;
    try {
      await createCommodityCarData(userId, commodityId);
      //return logic
      ctx.body = {
        code: 200,
        message: `Added succeed！`,
        success: true
      };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // User login
  async userLogin(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const result = await userLoginData(username, password);
      if (result.length > 0) {
        ctx.body = {
          code: 200,
          message: `Login succeed!`,
          success: true,
          data: result
        };
      } else {
        return errorFunction(PASSWORD_ERROR, ctx);
      }
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // Search all the users
  async allUserController(ctx, next) {
    try {
      const result = await allUser();
        ctx.body = {
          code: 200,
          message: `Search succeed!`,
          success: true,
          data: result
        };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
 }
module.exports = new UsersController();
