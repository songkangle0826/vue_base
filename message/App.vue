<template>
    <div>
        #app


        <button @click="show">弹层</button>

    </div>
</template>
<script>
    import { Message } from './Message/Message.js'
    export default{
        methods:{
            show(){
                Message.success({
                    message: '你好',
                    duration: 3000
                })
            }
        }
    }
</script>