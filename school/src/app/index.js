//Third-party module import
const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

//Custom module import
const readRouters = require('../router');

const app = new Koa();
app.readRouters = readRouters;
app.use(cors()); //Cross-domain configuration
app.use(bodyParser());
app.readRouters();

// const errorHandle = require('../app/error-handle');
// app.on('error', errorHandle);

module.exports = app;
