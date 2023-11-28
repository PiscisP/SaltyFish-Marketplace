/* 版权所有 ©2022-2025 QQ：1440272370 该管理系统遵守MIT开源协议 */
const app = require('./app');
const { APP_PORT } = require('./app/config');
require('./app/database');

app.listen(APP_PORT, () => {
  console.log(`koa服务器启动成功，端口号为：${APP_PORT}`);
});
