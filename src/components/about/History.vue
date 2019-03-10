<template>
  <div class="history row">
    <div class="card col-4" style="width: 15rem;" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}--{{item.num}}</h5>
        <p class="card-text">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      items:[
        {title:'意大利pizza',num:'3',text:'已完成支付',imgsrc:require('../../assets/pizza1.jpg')},
        {title:'芝士pizza',num:'6',text:'已完成支付',imgsrc:require('../../assets/pizza2.jpg')},
        {title:'麻辣pizza',num:'3',text:'已完成支付',imgsrc:require('../../assets/pizza3.jpg')}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:100%;
    height:60%;
  }
</style>
