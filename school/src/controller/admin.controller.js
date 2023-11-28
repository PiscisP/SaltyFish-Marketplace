const errorFunction = require('../app/error-function');
const { MYSQL_ERROR } = require('../constans/error-constans');
const { createAdminData,qq_login_service,delData ,isLogin} = require('../service/admin.service');
const passwordMD5 = require('../utils/password.handle.js');
class adminController {
  // 新建管理员用户
  async createAdmin(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const result = await createAdminData(username, passwordMD5(password));
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
  // qq 登录
  async qq_login_controller(ctx,next){
    const { qq } = ctx.request.body;
    try {
      const result = await qq_login_service(qq);
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `${qq}，欢迎登录！`,
        success: true,
        data: {
          qq
        }
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 删除登录
  async del_login_controller(ctx,next){
    try {
      const result = await delData();
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `已登录`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 查询登录
  async login_controller(ctx,next){
    try {
      const result = await isLogin();
      //返回逻辑
      ctx.body = {
        data: {
          list: result
        }
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
}

module.exports = new adminController();
