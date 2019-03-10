<template>
  <div class="hello text-center">
    <div class="box">
      <div class="bg">
        <h1>欢迎来品尝pizza</h1>
        <h2>这里有各种各样好吃的pizza</h2>
        <button @click="goMenu" class="btn btn-primary">Let's Order.</button>
      </div>
    </div>
    <h3 style="margin-top:50px;margin-bottom:25px;">快递信息</h3>
    <my-delivery></my-delivery>
    <h3 style="margin-top:50px;margin-bottom:25px;">历史订单</h3>
  </div>
</template>

<script>
import Delivery from '@/components/about/Delivery';
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
    goMenu(){
      this.$router.push('/menu');
    }
  },
  components:{
    'my-delivery':Delivery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  background: url('../assets/pizza-1.jpg') no-repeat;
  width: 100%;
  height: 500px;
  position: relative;
}
.bg{
  width: 500px;
  height:200px;
  background:rgba(0, 0, 0, 0.5);
  text-align: center;
  padding-top:45px;
  color: #ccc;
  position:absolute;
  top:150px;
  left:300px;
}
</style>
