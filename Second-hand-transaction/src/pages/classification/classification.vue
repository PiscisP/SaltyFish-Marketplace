<template>
  <div style="background-color: white;flex: 1;padding: 20px">
    <div class="search">
      <el-input v-model="search" size="large" placeholder="请搜索" clearable style="flex: 1" />
      <el-button type="primary" size="large" @click="onsearch" style="width: 120px">search</el-button>
    </div>
    <el-tabs tab-position="left" @tab-change="onchange">
      <el-tab-pane :label="item.title" v-for="(item,index) in tabs" :key="index">
        <div v-loading="loading">
          <y-card :list="list" v-if="list.length>0"></y-card>
          <div class="classification-no-goods" v-else>
            <img src="@/assets/images/no-goods.png" alt="none">
            <div>No product yet!</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import YCard from "@/components/goodsCard/card.vue"
import tabs from "@/components/classification.json"
import axios from "axios";
import {goodsStore} from "../../store";
import {deepClone} from "../../utils";

const store = goodsStore();

const loading = ref(false)

const type = ref("0")

let data = [];
const list = ref([])
const init = async ()=> {
  await axios.get('http://localhost:5000/commodity/all').then(response =>{
    data = deepClone(response.data.data)
    list.value = data.filter(item=>(item.isrelease ===1))
  })
}
init()

const listVal = ()=>{
  if (type.value === '0'){
    list.value = data.filter(item=>(item.isrelease===1))
  }else {
    list.value = data.filter(item=>(item.isrelease===1 && item.type===type.value))
  }
}

const onchange = (v)=>{
  type.value = v;
  listVal()
}


const searchList = (str, container)=> {
  const newList = [];
  //new list
  const startChar = str.charAt(0);
  //start
  const strLen = str.length;
  //search for

  for (let i = 0; i < container.length; i++) {
    const obj = container[i];
    let isMatch = false;
    for (let p in obj) {
      if (typeof (obj[p]) == "function") {
        obj[p]();
      } else {
        let curItem = "";
        if (obj[p] != null) {
          curItem = obj[p];
        }
        for (let j = 0; j < curItem.length; j++) {
          if (curItem.charAt(j) == startChar)
          {
            if (curItem.substring(j).substring(0, strLen) == str)
            {
              isMatch = true;
              break;
            }
          }
        }
      }
    }
    if (isMatch) {
      newList.push(obj);
    }
  }
  return newList;
}


const search = ref('')

const onsearch = ()=>{
  listVal()
 if (search.value){
   list.value = searchList(search.value,list.value)
 }
}



</script>

<style scoped>

.classification-no-goods{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search{
  display: flex;
  margin-bottom: 20px;
}

</style>