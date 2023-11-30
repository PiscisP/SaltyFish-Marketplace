const {
  createUserData,
  createCommodityCarData,
  userAdminLoginData,
  allUser,
  userGender,
  updateWantGoods,
  updateUserInfo,
  selectUserMessage,
  deleteUserMessage,
  createMessage
} = require('../service/users.service');
const { MYSQL_ERROR, PASSWORD_ERROR } = require('../constans/error-constans');
// const passwordMD5 = require('../utils/password.handle.js');
const errorFunction = require('../app/error-function');
class UsersController {
  // 新建用户
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
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `${username}，欢迎加入！`,
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
  // 加入购物车
  async createCommodityCar(ctx, next) {
    const { userId, commodityId } = ctx.request.body;
    try {
      await createCommodityCarData(userId, commodityId);
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `加购成功！`,
        success: true
      };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 用户登录
  async userAdminLogin(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const result = await userAdminLoginData(username, password);
      if (result.length > 0) {
        ctx.body = {
          code: 200,
          message: `登录成功！`,
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
  // 查询所有用户
  async allUserController(ctx, next) {
    try {
      const result = await allUser();
        ctx.body = {
          code: 200,
          message: `查询成功！`,
          success: true,
          data: result
        };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 更新用户
  // async updateUserController(ctx, next) {
  //   try {
  //     const { id, gender } = ctx.request.body;
  //     const result = await userGender(+id,+gender);
  //     ctx.body = {
  //       code: 200,
  //       message: `更新成功！`,
  //       success: true
  //     };
  //   } catch (err) {
  //     console.log(err);
  //     return errorFunction(MYSQL_ERROR, ctx);
  //   }
  // }
  // 更新用户信息 updateUserInfo
  async updateUserInfoController(ctx, next) {
    try {
      const { id, school,phone,introduction } = ctx.request.body;
      const result = await updateUserInfo(+id,school,phone,introduction);
      ctx.body = {
        code: 200,
        message: `更新成功！`,
        success: true
      };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  async updateGoods(ctx, next) {
    try {
      const { id, through } = ctx.request.body;
      const  result = await  updateWantGoods(+id,+through);
      ctx.body = {
        code: 200,
        message: `更新成功！`,
        success: true
      };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  //查询用户信息 selectUserMessage
  async selectUserMessageController(ctx, next) {
    try {
      const { id } = ctx.request.body;
      const  result = await  selectUserMessage(+id);
      ctx.body = {
        code: 200,
        message: `查询成功！`,
        success: true,
        data: result
      };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  //删除用户信息 selectUserMessage
  async deleteUserMessageController(ctx, next) {
    try {
      const { id } = ctx.request.body;
      const  result = await  deleteUserMessage(+id);
      ctx.body = {
        code: 200,
        message: `删除成功！`,
        success: true,
        data: result
      };
    } catch (err) {
      console.log(err);
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 新增用户信息 createMessage
  async createUserMessageController(ctx, next) {
    try {
      const { userid,message } = ctx.request.body;
      const  result = await  createMessage(+userid,message);
      ctx.body = {
        code: 200,
        message: `发送成功！`,
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
