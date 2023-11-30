//第三方模块导入
const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
// const koaBody = require('koa-body');
//自定义模块导入
const readRouters = require('../router');
// const errorHandle = require('../app/error-handle');
const app = new Koa();
app.readRouters = readRouters;
app.use(cors()); //跨域配置
app.use(bodyParser());
// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
//   }
// }));
app.readRouters();

// app.on('error', errorHandle);

module.exports = app;
