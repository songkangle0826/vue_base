<template>
    <div>
        <button @click="childBtn">我要改变值</button>


        <div class="div">{{a+b}}</div>




    </div>
</template>
<script>
    export default{
        data(){
            return{
                a: 1,
                b: '2'
            }
        },
        methods:{
            childBtn(){
                this.$emit('parentData','新值')
            }
        }
    }



    function antiShake(fn,time){
        var timer = null;
        return function(){
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                fn();
            },time)
        }
    }

    var i;
    function a(){

        function b(){
            i = 0
        }
    }


    // 一只青蛙一次可以跳上一阶台阶，也可以跳上二阶台阶，请这只可怜的青蛙跳上N阶台阶有几种方法？
    function jump(n){
        if(n <= 2) return 2;
        var num = 0;
        /*
        * n3 = n2 + n1
        * n4 = n3 + n2
        * n5 = n4 + n3
        * */
        num = jump(n-1) + jump(n-2)
        return num
    }


    function jump(n){
        let n1 = 1;
        let n2 = 2;
        let sum = n1 + n2;
        let x = n1;
        let y = n2;
        for(var i = 3 ;i < n;i++){
            sum  = x + y
            y =  sum;
            x = y
        }
        return sum;
    }



    function render(){
        with(vm){
            return _c(
                'div',
                {

                },
                vm.a+vm.b
            )
        }
    }

</script>


