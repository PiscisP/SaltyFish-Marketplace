/* Backend management related interfaces */
const Router = require('koa-router');
const { verifyUapValid } = require('../middleware/users.middleware');
 const { verifyUsernameExisit } = require('../middleware/users.middleware');
const {
  createUser,
  createCommodityCar,
  userLogin,
  allUserController,
} = require('../controller/users.controller');
const usersRouter = new Router({
  prefix: '/users'
});
usersRouter.post('/', verifyUapValid, verifyUsernameExisit, createUser); //User register
usersRouter.post('/commodity/', createCommodityCar); // add to shopping cart
usersRouter.post('/login', verifyUapValid, userLogin); //User login in
usersRouter.post('/all', allUserController); //User search
module.exports = usersRouter;
