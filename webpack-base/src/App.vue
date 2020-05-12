<template>
    <div class="app">
        App--{{ app }}

        <hello-world :value="msg" @input="(value)=>msg=value"></hello-world>
        
        <hello-world v-model="num"></hello-world>


        <hello-world :money.sync="money" :msg.sync="msg"></hello-world>


    </div>
</template>
<script>
    import HelloWorld from './HelloWorld.vue'
    export default{
        data(){
            return{
                num: '1234567',
                app: '1234',
                money: 1000,
                msg: 'woshishui'
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