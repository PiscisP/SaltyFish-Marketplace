/* Backend management related interfaces */
const Router = require('koa-router');
const { verifyUapValid } = require('../middleware/users.middleware');
const { verifyUsernameExisit } = require('../middleware/users.middleware');
const {
  createUser,
  createCommodityCar,
  userAdminLogin,
  allUserController,
  // updateUserController,
  updateGoods,
  updateUserInfoController,
  selectUserMessageController,
  deleteUserMessageController,
  createUserMessageController
} = require('../controller/users.controller');
const usersRouter = new Router({
  prefix: '/users'
});
usersRouter.post('/', verifyUapValid, verifyUsernameExisit, createUser); //User register
usersRouter.post('/commodity/', createCommodityCar); // add to shopping cart
usersRouter.post('/login', verifyUapValid, userAdminLogin); //User login in
usersRouter.post('/all', allUserController); //User search
// usersRouter.post('/update', updateUserController); //update user
// usersRouter.post('/updategoods', updateGoods); //update want to buy
// usersRouter.post('/updateuserinfo',   updateUserInfoController); //update user info
usersRouter.post('/message',  selectUserMessageController);
usersRouter.post('/message/delete',  deleteUserMessageController);
usersRouter.post('/message/create',  createUserMessageController);


module.exports = usersRouter;
