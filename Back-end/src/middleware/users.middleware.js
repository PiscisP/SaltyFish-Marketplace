const errorFunction = require('../app/error-function');
 const { inquireusernameData } = require('../service/users.service');
const verifyUapValid = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      return errorFunction(USERNAME_OR_ACCOUNT_PASSWORD_NOT_NULL, ctx);
    }
    // The user account should be within 5-16 texts
    const verifyAccountRule = /^\w{5,16}$/.test(username);
    if (!verifyAccountRule) {
      return errorFunction(ACCOUNT_TOO_LONG_OR_TOO_SHORT, ctx);
    }
    // User password must include both numbers and English characters, and must be within 6-18 characters
    const verifyPasswordRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(
      password
    );
    if (!verifyPasswordRule) {
      return errorFunction(PASSWORD_TOO_LONG_OR_NOT_VALID, ctx);
    }
    await next();
  };
// Verify username exists
const verifyUsernameExisit = async (ctx, next) => {
  try {
    // const result = await inquireusernameData(username);
    await next();
  } catch (err) {
    return errorFunction(MYSQL_ERROR, ctx);
  }
};
module.exports = {
  verifyUapValid,
  verifyUsernameExisit
};
