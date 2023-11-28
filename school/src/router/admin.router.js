/* 后台管理类相关接口 */
const Router = require('koa-router');
const {
  verifyUapValid,
  verifyAdminExisit
} = require('../middleware/admin.middleware');
const { createAdmin ,qq_login_controller,del_login_controller,login_controller} = require('../controller/admin.controller');
const adminRouter = new Router({
  prefix: '/admin'
});
adminRouter.post('/', verifyUapValid, verifyAdminExisit, createAdmin);
adminRouter.post('/login', qq_login_controller);
adminRouter.post('/del', del_login_controller);
adminRouter.post('/islogin', login_controller)
module.exports = adminRouter;
