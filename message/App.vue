<template>
    <div>
        <button @click="show">弹框</button> 
    </div>
</template>
<script>
import Vue from 'vue'
import ZfUI  from './Message'
Vue.use(ZfUI)       // use方法使用的时候，默认会调用内部的install方法
export default {
    methods:{
        show(){
            // Message.success({
            //     message: '你好',
            //     duration: 3000
            // })

            this.$message.success({
                message: '你好',
                duration: 3000
            })

        }
    }
    
}
</script>