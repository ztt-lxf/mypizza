// 引入
import Vue from 'vue'
import Vuex from 'vuex'
// 使用
Vue.use(Vuex)

export var store = new Vuex.Store({
    // 状态库（或数据源）
    state:{
        // 表示当前的菜品数组,自定义的
        menuItems:[],
        // 当前的用户名
        currentUser:null,
        // 当前的登录状态
        isLogin:false
    },

    // 派生状态的数据源
    getters:{
        // getMenuItems 自定义的名字
        getMenuItems:state=>state.menuItems,

        currentUser:state=>state.currentUser,
        isLogin:state=>state.isLogin
        //原始写法： isLogin:function(state){return state.isLogin} 
    },

    // 更改Vuex中store的状态值state
    mutations:{
        // 通过set方法实现get请求数据后的更新  (都是自定义的名字)
        setMenuItems(state,data){ //state——>当前状态值；data——>表示从组件传递的参数
            state.menuItems=data
        },

        // 通过push方法实现newPizza页面的post数据发生更新
        pushMenuItems(state,data){
            state.menuItems.push(data)
        },

        // 通过delete方法实现newMenu页面的删除数据功能
        deleteMenuItems(state,data){
            state.menuItems.forEach((item,index)=>{
                if(item==data){
                    state.menuItems.splice(index,1)
                }
            })
        },
        UserStatus(state,data){
            if(data){
                state.currentUser=data
                state.isLogin=true
            }else{
                state.currentUser=null
                state.isLogin=false
            }
        }
    },

    // 触发多个state的操作，使用mutations会触发时更好维护，但如果 mutations过多时需要有actions来触发了
    // 必须要通过dispatch这个方法进行分发
    actions:{
        setUser({commit},user){
            commit('UserStatus',user)
        }
    }



})
