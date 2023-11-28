const { createHash } = require('crypto');
// md5 一次加密
const passwordMD5 = (password) => {
  const hash = createHash('md5');
  const data = hash.update(password).digest('hex');
  // md5 二次加密
  const hashAgain = createHash('md5');
  const result = hashAgain.update(data).digest('hex');
  return result;
};
module.exports = passwordMD5;
