<template>
    <div>son2
        count: {{ count }}

        <button @click="changeCount">更改序号: </button>

        value: {{ value }}


        <!-- $attrs: 属性的集合 -->
        <div>{{ $attrs }}</div>

        <!-- 把所有的属性传递给Grandson2-->
        <!--
            v-bind将属性全部传递下去
            v-on将方法全部传递下去
         -->

        <!-- $listener 所有的方法的集合 -->
        {{ $listeners }}
        <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>


    </div>
</template>
<script>
    import Grandson2 from './grandson2.vue'
    // 如果组件中使用了props 就会将attrs从当前的$attrs移除掉
    export default{

        // 父传递给子元素,
        inheritAtts: false,        // <div money="100"></div>  表示不要放到属性上去
        props: {
            count: {
                type: Number,
            },
            value:{
                type: Number
            },
//            money: {
//                type: Number
//            }
        },
        components:{
            Grandson2
        },
        methods:{
            show(){
                console.log(1)
            },
            changeCount(){
                // this.$emit('update:count',100)
                this.$emit('input',100)
            }
        }
    }
</script>