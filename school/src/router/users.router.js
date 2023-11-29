/* 后台管理类相关接口 */
const Router = require('koa-router');
const { verifyUapValid } = require('../middleware/users.middleware');
const { verifyUsernameExisit } = require('../middleware/users.middleware');
const {
  createUser,
  createCommodityCar,
  userAdminLogin,
  allUserController,
  updateUserController,
  updateGoods,
  updateUserInfoController,
  selectUserMessageController,
  deleteUserMessageController,
  createUserMessageController
} = require('../controller/users.controller');
const usersRouter = new Router({
  prefix: '/users'
});
usersRouter.post('/', verifyUapValid, verifyUsernameExisit, createUser); //用户注册
usersRouter.post('/commodity/', createCommodityCar); // 加入购物车
usersRouter.post('/login', verifyUapValid, userAdminLogin); //用户登录
usersRouter.post('/all', allUserController); //用户查询
usersRouter.post('/update', updateUserController); //更新用户
usersRouter.post('/updategoods', updateGoods); //更新求购
usersRouter.post('/updateuserinfo',   updateUserInfoController); //更新用户信息
usersRouter.post('/message',  selectUserMessageController);
usersRouter.post('/message/delete',  deleteUserMessageController);
usersRouter.post('/message/create',  createUserMessageController);


module.exports = usersRouter;
