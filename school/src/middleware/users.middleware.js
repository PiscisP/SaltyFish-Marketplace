const errorFunction = require('../app/error-function');
const { inquireusernameData } = require('../service/users.service');
// const { ADMIN_ALREADY_EXISIT } = require('../constans/error-constans');
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
  const { username } = ctx.request.body;
  try {
    const result = await inquireusernameData(username);
   // Throws an error if it exists
    // if (result.length > 0) {
    //   return errorFunction(ADMIN_ALREADY_EXISIT, ctx);
    // }
    // If it does not exist, go to the next middleware
    await next();
  } catch (err) {
    return errorFunction(MYSQL_ERROR, ctx);
  }
};
module.exports = {
  verifyUapValid,
  verifyUsernameExisit
};
