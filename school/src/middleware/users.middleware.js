const errorFunction = require('../app/error-function');
const { inquireusernameData } = require('../service/users.service');
const { ADMIN_ALREADY_EXISIT } = require('../constans/error-constans');
// 验证用户名是否存在
const verifyUsernameExisit = async (ctx, next) => {
  const { username } = ctx.request.body;
  try {
    const result = await inquireusernameData(username);
    // 如果存在则抛出错误
    if (result.length > 0) {
      return errorFunction(ADMIN_ALREADY_EXISIT, ctx);
    }
    // 如果不存在则进入下一个中间件
    await next();
  } catch (err) {
    return errorFunction(MYSQL_ERROR, ctx);
  }
};
module.exports = {
  verifyUsernameExisit
};
