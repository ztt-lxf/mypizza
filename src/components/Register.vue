<template>
  <div class="register container text-center mt-5">
    <div>
      <img style="width:100px" src="../assets/logo.png" alt="logo">
      <h3>注册</h3>
    </div>  
    <form style="width:500px">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="请输入您的账号" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="请输入您的密码" v-model="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="请再次确认您的密码" v-model="reconfirm">
      </div>
      <button type="submit" @click.prevent="onSubmit" class="btn btn-primary btn-block">注册</button>
    </form>
  </div>
</template>
<script>
// 引入axios
import axios from 'axios';
export default {
  name: 'Register',
  data () {
    return {
      username:'',
      password:'',
      reconfirm:''
    }
  },
  methods:{
    onSubmit(){
      // 非空验证
      if(this.password==''&&this.username==''){
        return
      }
      // 进行当前密码的重复确认
      if(this.password===this.reconfirm){
        var formData={
          username:this.username,
          password:this.password
        }
        // 自己定义一个json数据    然后把formData传到json数据中
        axios.post('./user-ztt.json',formData)
        // res 返回数据
        .then(res=>{
          console.log('当前数据抛出成功')
          alert('注册成功');
          // 当注册成功时跳转到登录页，引导用户登录
          // 有两种方法跳转：
          // 1、push堆栈法
          this.$router.push('/login');
          // 2、replace替代法
          // this.$router.replace('/login');
        })
      }else{
        alert('密码输入不一致，请重新输入');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register{
    width: 500px;
    margin:0 auto;
  }
</style>
