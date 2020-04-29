<template>
    <div class="app">
        App--{{ app }}
        <hello-world></hello-world>
    </div>
</template>
<script>
    import HelloWorld from './HelloWorld.vue'
    export default{
        data(){
            return{
                app: '1234567'
            }
        },
        components:{
            HelloWorld
        }
    }
</script>
<style>
    .app{
        font-size: 50px;
    }
</style>