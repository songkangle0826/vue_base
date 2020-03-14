<template>
    <div>grandson2
        {{ $attrs }}
        <button @click="$listeners.click">点我</button>
        <button @click="app">调用父组件上的方法</button>
    </div>
</template>
<script>
    export default{
        inject:['vm'],
        mounted(){
            console.log(this.vm)

            this.$nextTick(()=>{
                this.$bus.$emit('change',1000)
            })

        },
        methods:{
            app(){
                this.vm.say()
            }
        }
    }
</script>