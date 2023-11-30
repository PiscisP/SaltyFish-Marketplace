const errorFunction = require('../app/error-function');
const { MYSQL_ERROR } = require('../deleted files/error-constans');
const {
  createCommodity,
  inquireCommodityListData,
  inquireCommodityCarListData,
  selectAllGoods,
  updateWantGoods,
  createWantToBuyGoods,
  updateCommodityListData,
  updateCommodityListDataIR,
  deleteCommodityListData,
  deleteWantBuyListData
} = require('../service/commodity.service');
class CommodityController {
  // 发布订单
  async createCommodity(ctx, next) {
    const { userId,seller, phone, price, image, type,address, title, description } =
      ctx.request.body;
    try {
      const result = await createCommodity(userId,seller, phone, price, image, type,address, title, description);
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `发布成功！！`,
        success: true
      };
      return result;
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 查询商品列表
  async inquireCommodityList(ctx, next) {
    const result = await inquireCommodityListData();
    //返回逻辑
    ctx.body = {
      code: 200,
      message: `查询成功！！`,
      success: true,
      data: result
    };
    try {
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 修改商品
  // async updateCommodityList(ctx, next) {
  //   const {id,recommend} = ctx.request.body;
  //   try {
  //     const result = await updateCommodityListData(id,recommend);
  //     //返回逻辑
  //     ctx.body = {
  //       code: 200,
  //       message: `修改成功！！`,
  //       success: true
  //     };
  //   } catch (err) {
  //     return errorFunction(MYSQL_ERROR, ctx);
  //   }
  // }
  //更新商品
  // async updateCommodityListIR(ctx, next) {
  //   const {id,isrelease} = ctx.request.body;
  //   try {
  //     const result = await updateCommodityListDataIR(id,isrelease);
  //     //返回逻辑
  //     ctx.body = {
  //       code: 200,
  //       message: `修改成功！！`,
  //       success: true
  //     };
  //   } catch (err) {
  //     return errorFunction(MYSQL_ERROR, ctx);
  //   }
  // }
  // 删除商品
  async deleteCommodityList(ctx, next) {
    const {id} = ctx.request.body;
    try {
      const result = await deleteCommodityListData(id);
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `删除成功！！`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 查询加购的购物车列表
  async inquireCommodityCarList(ctx) {
    try {
      const result = await inquireCommodityCarListData();
      ctx.body = {
        code: 200,
        message: `查询成功！！`,
        success: true,
        data: result
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 查询求购列表
  async selectAllGoodsController(ctx) {
    try {
      const result = await selectAllGoods();
      ctx.body = {
        code: 200,
        message: `查询成功`,
        success: true,
        data: result
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 发布求购
  async createWantToBuyGoodsController(ctx, next) {
    const { userid, name, goods, address } = ctx.request.body;
    try {
      const result = await createWantToBuyGoods(userid, name, goods, address);
      console.log(result)
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `发布成功！！`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
  // 更新求购
  // async updateW(ctx,next){
  //   // updateWantGoods
  //   const {id,through} = ctx.request.body;
  //   try {
  //     const result = await updateWantGoods(+id,+through);
  //     console.log("result: ",result);
  //     //返回逻辑
  //     ctx.body = {
  //       code: 200,
  //       message: `更新成功！！`,
  //       success: true
  //     };
  //   } catch (err) {
  //     return errorFunction(MYSQL_ERROR, ctx);
  //   }
  // }

  // 删除求购 deleteWantBuyListData
  async delWantBuyController(ctx,next){
    // updateWantGoods
    const {id} = ctx.request.body;
    try {
      const result = await deleteWantBuyListData(+id);
      console.log("result: ",result);
      //返回逻辑
      ctx.body = {
        code: 200,
        message: `删除成功！！`,
        success: true
      };
    } catch (err) {
      return errorFunction(MYSQL_ERROR, ctx);
    }
  }
}

module.exports = new CommodityController();
