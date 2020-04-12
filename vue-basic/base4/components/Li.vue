<template>
    <li style="display: flex">
        <div>姓名: {{ data.name }}</div>
        <div>年龄: {{ data.age }}</div>
        <div>button1</div>
        <div @click="open">{{count==0?'开启提醒':count+'倒计时' }}</div>
    </li>
</template>
<script>
    export default{
        props:['data'],
        data(){
            return{
                count: 0,  //倒计时
                timer: null
            }
        },
        methods:{
            open(){
                if(this.count != 0){
                    return;
                }
                this.count = 30;
            }
        },
        watch:{
            count(newValue,oldValue){
                console.log(newValue,oldValue)
                if(newValue==0){
                    clearTimeout(this.timer)
                    this.timer = null
                    return
                }
                this.timer = setTimeout(()=>{
                    this.count = this.count - 1;
                },1000)
            }
        }
    }
</script>