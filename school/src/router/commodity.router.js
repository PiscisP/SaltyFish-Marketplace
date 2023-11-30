/* Backend management related interfaces */
const Router = require('koa-router');
const {
  createCommodity,
  inquireCommodityList,
  createWantToBuyGoodsController,
  updateW,
  updateCommodityListIR,
  updateCommodityList,
  deleteCommodityList
} = require('../controller/commodity.controller.js');
const commodityRouter = new Router({
  prefix: '/commodity'
});
commodityRouter.post('/', createCommodity);
commodityRouter.get('/all', inquireCommodityList);
commodityRouter.get('/createWantToBuyGoods', createWantToBuyGoodsController);
commodityRouter.post('/delete',  deleteCommodityList);
module.exports = commodityRouter;
