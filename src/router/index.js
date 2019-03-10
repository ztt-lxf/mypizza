import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Home from '@/components/Home'
import Menu from '@/components/Menu';
import Admin from '@/components/Admin'
import About from '@/components/About';
import Login from '@/components/Login'
import Register from '@/components/Register';

// 二级路由
import Activity from '@/components/about/Activity';
import Contact from '@/components/about/Contact';
import Delivery from '@/components/about/Delivery';
import History from '@/components/about/History';

// 三级路由
import Address from '@/components/about/contact/Address';
import Person from '@/components/about/contact/Person';
import Telphone from '@/components/about/contact/Telphone';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default:Home,
        'history':History
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,

      // 加上导航守卫   
      beforeEnter:(to,from,next)=>{
        // alert('您正在进入admin页面');
        // next() 表示继续，允许进入当前路由
        // next(false) 表示不允许进入
        // next('/login)  也可以表示跳转到相应页面
        if(sessionStorage.user){
          next();
        }else{
          alert('您还没有登陆，请先登录');
          next('/login');
        }
      }

    },
    {
      path: '/about',
      name: 'About',
      component: About,
      // 设置默认跳转
      redirect:'/contact',
      children:[ //二级路由
        {
          path:'/contact',
          name:'Contact',
          component:Contact,
          // 设置默认跳转
          redirect:'/contact/address',
          children:[ //三级路由
            {
              path:'/contact/address',
              name:'Address',
              component:Address
            },
            {
              path:'/contact/person',
              name:'Person',
              component:Person
            },
            {
              path:'/contact/tel',
              name:'Telphone',
              component:Telphone
            }
          ]
        },
        {
          path:'/delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/history',
          name:'History',
          component:History
        },
        {
          path:'/activity',
          name:'Activity',
          component:Activity
        }

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ],
  // 取消#的锚点链接
  mode:'history',

  // 导航定位
  // 通过路由监听scroll滚动，来实现页面的滚动位置渲染
  // scrollBehavior(to,from,saveedPosition){
  //   return {x:0,y:500}
  // }
})
