import {defineStore} from 'pinia'

export const goodsStore = defineStore('goods', {
    state: () => {
        return {
            goodsInfoShow: false,
            goodsInfo: {},
            list: [],
            allList: [],
            myself: false
        }
    },
    getters: {
        listRecommend(state){
            return state.list.filter(item=>(item.recommend===1||item.recommend === '1'))
        },
        listGetters(state){
          return state.list;
        },
        typeList (){
           return (type)=>{
              if (type === '0'){
                  return this.listGetters;
              }else {
                  return this.listGetters.filter(item=>item.type===type);
              }
           }
        }
    },
    actions: {
        goodsDetail(goodsInfo,myself){
            this.goodsInfoShow = true
            this.goodsInfo = goodsInfo
            this.myself = myself;
        },
        deleteGoods(){
            this.goodsInfoShow = false;
        }
    },

    // 开启数据缓存
    persist: {
        enabled: false,
        strategies: [
            {
                key: 'my_user',
                storage: localStorage,
                paths: ['goodsInfo']
            }
        ],
    }
})
