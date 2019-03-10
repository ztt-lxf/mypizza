import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 引入vuex
import {store} from './store/store'

// console.log(axios)
// 配置axios的请求地址路径
axios.defaults.baseURL='https://wd0646504156qgutkm.wilddogio.com/'

// axios.get('./get.json')

Vue.config.productionTip = false

// 全局守卫
// 当进入localhost:8080的时候，让当前的页面跳转到对于的登录注册也
// to 从哪来的;   from  到哪去
router.beforeEach((to,from,next)=>{
  if(sessionStorage.user){ //登录
    next()
  }else{ //未登录
    if(to.path=='/login' || to.path=='/register'){
      next()
    }else{
      alert('对不起，您还没有登陆，请先登录');
      next('/login')
    }
  }
  
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
