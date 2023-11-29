const errorFunction = require('../app/error-function');
const { inquireusernameData } = require('../service/users.service');
// const { ADMIN_ALREADY_EXISIT } = require('../constans/error-constans');
const verifyUapValid = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      return errorFunction(USERNAME_OR_ACCOUNT_PASSWORD_NOT_NULL, ctx);
    }
    // 用户账号必须在5-16位以内
    const verifyAccountRule = /^\w{5,16}$/.test(username);
    if (!verifyAccountRule) {
      return errorFunction(ACCOUNT_TOO_LONG_OR_TOO_SHORT, ctx);
    }
    // 用户密码必须同时包括数字跟英文字符，并在6-18位以内
    const verifyPasswordRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(
      password
    );
    if (!verifyPasswordRule) {
      return errorFunction(PASSWORD_TOO_LONG_OR_NOT_VALID, ctx);
    }
    await next();
  };
// 验证用户名是否存在
const verifyUsernameExisit = async (ctx, next) => {
  const { username } = ctx.request.body;
  try {
    const result = await inquireusernameData(username);
    // 如果存在则抛出错误
    // if (result.length > 0) {
    //   return errorFunction(ADMIN_ALREADY_EXISIT, ctx);
    // }
    // 如果不存在则进入下一个中间件
    await next();
  } catch (err) {
    return errorFunction(MYSQL_ERROR, ctx);
  }
};
module.exports = {
  verifyUapValid,
  verifyUsernameExisit
};
