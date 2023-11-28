/* 自动化挂载Router中间件 */
const fs = require('fs');
const path = require('path');
const readRouters = function () {
  // 获取路由文件列表
  fs.readdirSync(__dirname).forEach((fileName) => {
    // 如果遇到当前文件则跳过挂载
    if (fileName === 'index.js') return;
    // 拼接路由路径
    const filePath = path.join(__dirname, fileName);
    //获取路由页面
    const router = require(filePath);
    //挂载路由
    this.use(router.routes());
    //拦截404错误
    this.use(router.allowedMethods());
  });
};
module.exports = readRouters;
