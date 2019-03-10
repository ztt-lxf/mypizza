<template>

    <div class="newmenu">
        <h3>菜单管理：</h3>
        <table class="table">
            <thead class="table-secondary">
                <tr>
                    <th scope="col">序号</th>
                    <th scope="col">品种</th>
                    <th scope="col">删除</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in items" :key="index">
                <tr>   
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td><button class="btn btn-danger" @click="delItem(item)">删除</button></td>
                </tr>
            </tbody>    
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            // items:[{name:'111'},{name:'222'},{name:'333'}]

            // items:[]
        }
    },
    mounted(){
        var that=this
        axios.get('./menu-ztt.json')
        .then(res=>{
            console.log(res.data)
            // 在这里需要获取key值，存储为id，方便通过id删除当前项
            for(var key in res.data){
                console.log(key)
                var item = res.data[key]
                item.id=key
                that.items.push(item)

                // res.data[key].id=key
                // that.items.push(res.data[key])
            }
            // console.log(that.items)
            this.$store.commit('setMenuItems',that.items)
        })
    },
    methods:{
        delItem(item){
            axios.delete('./menu-ztt/'+item.id+'.json')
            .then(res=>{
                console.log('删除成功')

                // this.$router.push('/menu')

                this.$store.commit('deleteMenuItems',item)

                // 刷新页面
                // location.reload()
            })
        }
    },
    computed:{
        items(){
            // 优势在于通过vuex=>store，直接实现了数据的更新
            return this.$store.getters.getMenuItems
        }
    }
}
</script>
<style scoped>

</style>


