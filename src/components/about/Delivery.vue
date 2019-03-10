<template>
  <div class="delivery row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      items:[
        {title:'顺丰快递',text:'快递信息',imgsrc:require('../../assets/del-sf.png')},
        {title:'圆通快递',text:'快递信息',imgsrc:require('../../assets/del-yt.jpg')},
        {title:'中通快递',text:'快递信息',imgsrc:require('../../assets/del-zt.jpg')}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:100%;
    height:70%;
  }
</style>
