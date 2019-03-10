<template>
  <div class="login container text-center mt-5">
    <div>
      <img style="width:100px" src="../assets/logo.png" alt="logo">
      <h3>登陆</h3>
    </div>  
    <form style="width:500px">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="请输入您的账号" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="请输入您的密码" v-model="password">
      </div>
      <button type="submit" @click.prevent="onSubmit" class="btn btn-primary btn-block">登陆</button>
    </form>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios';

export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    // 发送数据请求
    onSubmit(){
      axios.get('./user-ztt.json')
      .then((res)=>{
        console.log(res.data);
        var result = [];
        // 用for-in形式来解决对象循环
        for(var key in res.data){
          var user = res.data[key];
          result.push(user);
        }
        console.log(result);
        // 匹配当前的账号密码
        var trueUser = result.filter((user)=>{
          return user.username===this.username && user.password===this.password;
        })
        // 匹配成功
        if(trueUser!=null && trueUser.length>0){
          alert('登陆成功');

          // 发送一个事件到store.js文件中
          // currentUser==>赋值
          // isLogin==>true
          this.$store.dispatch('setUser',trueUser[0].username)

          sessionStorage.setItem('user',trueUser[0].username)

          this.$router.push('/admin');
        }else{
          alert('账号或密码错误，请重新输入');
          // 发送一个事件到store.js文件中
          // currentUser==>null
          // isLogin==>false

          this.$store.dispatch('setUser',null)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 500px;
    margin:0 auto;
  }
</style>
