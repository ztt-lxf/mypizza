<template>
  <div class="menu container row mt-5">
    <!-- 左菜单 -->
    <div class="col-7">
      <h3>菜单：</h3>
      <table class="table">
        <thead class="table-secondary">
          <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格(元)</th>
            <th scope="col">添加</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
          <tr>
            <td colspan="3"><b class="text-primary">{{item.name}}</b>:{{item.describe}}</td>
          </tr>
          <tr v-for="(item2,index2) in item.options" :key="index2">
            <td>{{item2.size}}</td>
            <td>{{item2.price}}</td>
            <td><button type="button" class="btn btn-outline-info" @click="addGoods(item,item2)">+</button></td>
          </tr>
        </tbody>
      </table>

    </div>
    <!-- 右购物车 -->
    <div class="col-5">
      <h3>购物车：</h3>
      <table class="table">
        <thead class="table-secondary">
          <tr>
            <th scope="col">数量</th>
            <th scope="col">商品</th>
            <th scope="col">价格(元)</th>
          </tr>
        </thead>

        <template v-if="newItems.length>0">
          <tbody v-for="(item,index) in newItems" :key="index">
            <tr>
              <td>
                <button type="button" class="btn btn-outline-secondary" @click="add(item)">+</button>
                <input style="width:50px" type="number" v-model.number="item.num"> 
                <button type="button" class="btn btn-outline-secondary" @click="reduce(item,index)">-</button></td>
              <td>{{item.name}}-{{item.size}}</td>
              <td>{{item.price*item.num}}</td>
            </tr>
          </tbody>
          <tr>
              <td></td>
              <td colspan="2"> <b>商品总件数：{{totalNum}}</b></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2"> <b>商品总价格：{{totalPrice}}</b></td>
            </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3">
              <h4 class="text-primary"><em>您还没有添加任何商品</em></h4>
            </td>
          </tr>
        </template>
      </table>

    </div>
    <!-- {{items2}} -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Menu',
  data () {
    return {
      // items:{},
      // items:{
      //   0:{
      //     name:'芝士pizza',
      //     describe:'本店的招牌pizza',
      //     options:[
      //       {size:'5寸',price:'30'},
      //       {size:'8寸',price:'50'}
      //     ]
      //   },
      //   1:{
      //     name:'夏威夷pizza',
      //     describe:'本店的招牌pizza',
      //     options:[
      //       {size:'5寸',price:'40'},
      //       {size:'8寸',price:'60'}
      //     ]
      //   }

      // },
      // 表示当我在左边菜单栏添加数据，newItems才有值
      newItems:[ ]
    }
  },
  mounted(){
    axios.get('./menu-ztt.json')
    .then(res=>{
      // this.items=res.data

      this.$store.commit('setMenuItems',res.data)

    })
  },
  methods:{
    addGoods(item,options){
      // 点击添加时实现去重
      // 当前展示的这一项与我们输出的一项吻合时，实现数量num+1
      var result = this.newItems.filter((item2)=>{
        return item.name==item2.name && options.size==item2.size
      })
      if(result!=null && result.length>0){
        result[0].num++
      }else{
        this.newItems.push({
        name:item.name,
        size:options.size,
        num:1,
        price:options.price
      })
      }
    },
    reduce(item,index){
      if(item.num>1){
        item.num--
      }else{
        this.newItems.splice(index,1)
      }
    },
    add(item){
      item.num++
    }
  },
  computed:{
    totalNum(){
      return this.newItems.length;
    },
    totalPrice(){
      return this.newItems.reduce((sum,cur)=>{
        return sum+cur.num*cur.price
      },0)
    },
    items(){
      return this.$store.getters.getMenuItems
    }
    // items2(){
    //   return this.$store.state.menuItems
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
