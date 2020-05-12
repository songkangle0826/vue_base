<template>
    <div class="index">
        
        
        
        <span>: num的值</span> {{ value }}  {{ numParent }}
        <button @click="click1">更改值value</button>
        
        <br/>

        <span>money的值: </span> {{ money }} 
        <button @click="click2">更改值money</button>   

        <br/>

        <span>msg的值: </span> {{ msg }} 
        <button @click="click3">更改值msg</button> 

        
    </div>
</template>
<script>
    export default{
        model:{
            prop: 'numParent',        // 绑定prop传递的值
            event: 'numParentChange'  // 定义触发事件名称
        },
        props: {
            value: String,
            numParent: String,
            money: {
                type: Number,
                default: 0
            },
            msg: String
        },
        data(){
            return{
                name: 'scsd '
            }
        },
        methods:{
            click1(){
                this.$emit('input','100')

                this.$emit('numParentChange','100')
            },
            click2(){
                this.$emit('update:money',1000000)
            },
            click3(){
                this.$emit('update:msg','skl')
            }
        }
    }
</script>
<style lang="less">
    .index{
        color: red;
        span{
            color: orange;
        }
    }
</style>