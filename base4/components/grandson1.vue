<template>
    <div>grandson1 {{ money }}
        <button @click="changeMoney">修改钱数</button>
        <button @click="say">说话</button>
    </div>
</template>
<script>
    export default{
        props:{
            money:{
                type: Number,
            }
        },
        data(){
            return{
                n: 1,
                grandson1: 'grandson1'
            }
        },
        methods:{
            changeMoney(){
                // this.$emit('change-item',500)

                // 直接出发父亲绑定的事件
                // this.$parent.$emit('change-item',500)

                // 自动向上查找他的父亲,有change的话,
                this.$dispatch('change-item',300)
            },
            say(){
                this.$dispatch('say',500)
            },
            eat(){
                console.log('eat叼叼叼')
            }
        }
    }
</script>