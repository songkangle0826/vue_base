<template>
    <div>
        <div class="app">{{ data }}</div>
        <!--<HelloWorld></HelloWorld>-->


        <div v-for="(item,index)  in  roomNameInput">
            <div>{{ index+1 }}</div>
            <input type="text" v-model="item.checkInName">
        </div>


        <select name="" id="" @change="change">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button @click="sure">确定1</button>
    </div>
</template>
<script>
//import HelloWorld from './HelloWorld.vue'
export default({
    data(){
        return{
            data: '11111111',
            roomNameInput:[],
            roomValue: 0,
        }
    },
    methods:{
        change(e){
            let lengthValue = e.target.value;
            this.roomValue = lengthValue;
        },
        sure(){
            this.roomNameInput = [];
            for(let i = 0;i<this.roomValue;i++){
                this.roomNameInput.push({
                    checkInName: ''
                })
            }




        }
    },
    components:{
//        HelloWorld
    }
})
</script>
<style scoped>
    .app{
        color: red;
        font-size: 100px;
    }
</style>