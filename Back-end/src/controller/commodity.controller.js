const errorFunction = require('../app/error-function');
const {
  createCommodity,
  inquireCommodityListData,
  inquireCommodityCarListData,
  selectAllGoods,
  createWantToBuyGoods,
  deleteCommodityListData,
  deleteWantBuyListData
} = require('../service/commodity.service');
class CommodityController {
  // Post item
  async createCommodity(ctx, next) {
    const { userId,seller, phone, price, image, type,address, title, description } =
      ctx.request.body;
    try {
      const result = await createCommodity(userId,seller, phone, price, image, type,address, title, description);
      //return logic
      ctx.body = {
        code: 200,
        message: `Posted successfully! !`,
        success: true
      };
      return result;
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // Query item list
  async inquireCommodityList(ctx, next) {
    const result = await inquireCommodityListData();
    //return logic
    ctx.body = {
      code: 200,
      message: `search successful! !`,
      success: true,
      data: result
    };
    try {
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // Delete item
  async deleteCommodityList(ctx, next) {
    const {id} = ctx.request.body;
    try {
      const result = await deleteCommodityListData(id);
      //return logic
      ctx.body = {
        code: 200,
        message: `Delete Succeed! !`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // Search commoditycart list of additional purchases
  async inquireCommodityCarList(ctx) {
    try {
      const result = await inquireCommodityCarListData();
      ctx.body = {
        code: 200,
        message: `Search succeed!!`,
        success: true,
        data: result
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // Search want to buy list
  async selectAllGoodsController(ctx) {
    try {
      const result = await selectAllGoods();
      ctx.body = {
        code: 200,
        message: `Search succeed!!`,
        success: true,
        data: result
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // Post want to buy
  async createWantToBuyGoodsController(ctx, next) {
    const { userid, name, goods, address } = ctx.request.body;
    try {
      const result = await createWantToBuyGoods(userid, name, goods, address);
      console.log(result)
      //return logic
      ctx.body = {
        code: 200,
        message: `Post succeed!!`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // deleteWantBuyListData
  async delWantBuyController(ctx,next){
    // updateWantGoods
    const {id} = ctx.request.body;
    try {
      const result = await deleteWantBuyListData(+id);
      console.log("result: ",result);
      //return logic
      ctx.body = {
        code: 200,
        message: `Delete Succeed! !`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
}

module.exports = new CommodityController();
