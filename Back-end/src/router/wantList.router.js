/* Backend management related interfaces */
const Router = require('koa-router');
const {
  selectAllGoodsController,
  createWantToBuyGoodsController,
  delWantBuyController
} = require('../controller/commodity.controller.js');
const commodityRouter = new Router({
  prefix: '/wantlist'
});
commodityRouter.get('/',selectAllGoodsController)
commodityRouter.post('/create',createWantToBuyGoodsController)
commodityRouter.post('/delete',delWantBuyController)

module.exports = commodityRouter;
