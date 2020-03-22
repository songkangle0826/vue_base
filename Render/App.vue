<template>
    <div>
        <Level type="1">我很帅</Level>
        <Level type="2">我很帅</Level>
        <Level type="3">我很帅</Level>
        <Level type="4">我很帅</Level>
        <Level type="5">我很帅</Level>
        <Level type="6">我很帅</Level>


        <!-- 用户无法自定义列表中的内容 -->
        <!-- <List :arr="arr" :render="render"></List> -->
        <!-- <List :arr="arr" ></List> -->


        <!-- 作用域插槽 -->
        <List :arr="arr">
            <!-- 希望拿到每次循环的结果 -->

            <!-- 老的用法 -->
            <!-- <template slot-scope="{a,b}">
                <li># {{ a }}-== {{ b }} </li> 
            </template>      -->


            <!-- 新的写法 -->
            <template v-slot="{a,b}">
                <li># {{ a }}-== {{ b }} </li> 
            </template>    
            
        </List>

    </div>
</template>
<script>

// slot-scope 作用域插槽 可以将组件的内容 共享出来 可以复用


/*
    // template 不灵活  递归， 功能缺陷（标签组件）
    import Level from './components/Level.vue'
    export default {
        data(){

        },
        render(h){  // 页面中有template时，vue会把template中的内容打包替换掉render函数中的内容，所以，有template时，render函数不生效，如果没有template时，js中必须有render函数，否则会报错
            return 
        },
        components:{
            Level
        }
    }
*/


// 使用render渲染的
import Level from './components/LevelFunction.js'
import List from './components/List.vue'
export default {
    data(){
        return{
            arr: [1,2,3]
        }
    },
    methods:{
        render(h,item){  // jsx 语法默认要是使用这个h变量
            return <li># { item }</li>
        }
    },
    components:{
        Level,
        List
    }
}
</script>
