<template>
  <div class="activity">
    <div class="card" style="width: 40rem;" v-for="(item,index) in items" :key="index">
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
  name: 'Activity',
  data () {
    return {
      items:[
        {imgsrc:require('../../assets/热门活动.jpg'),title:'热门活动一',text:'欢庆佳节，pizza买一送一~'},
        {imgsrc:require('../../assets/热门活动.jpg'),title:'热门活动二',text:'欢庆佳节，pizza买一送一~'},
        {imgsrc:require('../../assets/热门活动.jpg'),title:'热门活动三',text:'欢庆佳节，pizza买一送一~'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
