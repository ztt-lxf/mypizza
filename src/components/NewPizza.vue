<template>
    <div class="newpizza row mt-5">
        <div class="col-7">
            <h3>添加新商品</h3>
            <form>
                <div class="form-group">
                    <h4 class="mt-3">商品名称：</h4>
                    <input type="text" class="form-control" placeholder="商品名称" v-model="newPizza.name">
                </div>
                <div class="form-group">
                    <h4>商品描述：</h4>
                    <textarea class="form-control" rows="3" v-model="newPizza.describe"></textarea>
                </div>
                <h4>价格&尺寸：</h4>
                <div class="form-row mt-3">
                    尺寸：
                    <div class="form-group col-md-4">
                        <select class="form-control" v-model="newPizza.size1">
                            <option>5寸</option>
                            <option>7寸</option>
                            <option>9寸</option>
                            <option>11寸</option>
                        </select>
                    </div>
                    价格(元)：
                    <div class="col">
                    <input type="text" class="form-control" placeholder="价格" v-model="newPizza.price1">
                    </div>
                </div>

                <div class="form-row mt-3">
                    尺寸：
                    <div class="form-group col-md-4">
                        <select id="inputState" class="form-control" v-model="newPizza.size2">
                            <option>5寸</option>
                            <option>7寸</option>
                            <option>9寸</option>
                            <option>11寸</option>
                        </select>
                    </div>
                    价格(元)：
                    <div class="col">
                    <input type="text" class="form-control" placeholder="价格" v-model="newPizza.price2">
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block mt-5" @click.prevent="addPizza">添加商品</button>
            </form>
        </div>

        <!-- <div class="col-5">
            <table class="table">
                <thead class="table-secondary">
                <tr>
                    <th scope="col">数量</th>
                    <th scope="col">商品</th>
                    <th scope="col">价格(元)</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div> -->



        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            newPizza:{

            }
        }
    },
    methods:{
        addPizza(){
            var data={
                name:this.newPizza.name,
                describe:this.newPizza.describe,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            }
            axios.post('./menu-ztt.json',data)
            .then(res=>{
                console.log(res.data)

                this.$store.commit('pushMenuItems',data)

                // 页面跳转
                // this.$router.push('/menu')

                // 页面刷新
                // location.reload()
            })
        }
    }
}
</script>
<style scoped>

</style>


