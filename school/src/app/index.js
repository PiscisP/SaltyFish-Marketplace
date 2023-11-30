//Third-party module import
const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
// const koaBody = require('koa-body');
//Custom module import
const readRouters = require('../router');
// const errorHandle = require('../app/error-handle');
const app = new Koa();
app.readRouters = readRouters;
app.use(cors()); //Cross-domain configuration
app.use(bodyParser());
// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     maxFileSize: 200*1024*1024    // Set the maximum upload file size limit, the default is 2M
//   }
// }));
app.readRouters();

// app.on('error', errorHandle);

module.exports = app;
