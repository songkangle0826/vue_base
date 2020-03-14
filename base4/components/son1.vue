<template>
    <div>
        son1 {{ money }}
        <button @click="changeMoney()">修改💰</button><button @click="say">说话</button>
        <!-- 给grandSon绑定事件 -->
        <!--<GrandSon1 :money="money" @change-item="change"></GrandSon1>-->



        <GrandSon1 :money="money" @eat="eat"></GrandSon1>





    </div>
</template>
<script>
    import GrandSon1 from './grandson1.vue'
    // vue的特点: 单向数据流(从头点尾)
    export default{
        components: {
            GrandSon1
        },
        props:{
            money:{
                type: Number,
            }
        },
        data(){
            return{
                m: 1,
                son1: 'son1'
            }
        },
        methods:{
            change(newValue){
                this.$emit('change-item',newValue)
            },
            changeMoney(){
                this.$emit('change-item',200)
            },
            say(){
                this.$dispatch('say',500)
            },
            eat(){
                console.log('eat')
            }
        }
    }
</script>