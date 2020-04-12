<template>
    <div>app
        <Parent @say="say"></Parent>



        <ul>
            <template v-for="(item,index) in dataList">
                <Li :data="item"></Li>
            </template>
        </ul>

        <!--<button @click="broadcast">出发所有子组件带有eat的方法</button>-->
    </div>
</template>
<script>
    // 组件使用的三步曲: 声明+注册+使用
    import Parent from './components/parent'
    import Li  from  './components/Li.vue'
    export default{
        provide(){  // 暴露全局方法
            return{
                vm: this
            }
        },
        // render(){}  模板编译好后,会打包放到render函数中
        components:{
            Parent,
            Li
        },
        data(){
            return{
                app: 'app',
                dataList:[{
                    name: '哈哈哈1',
                    age: 11,
                },{
                    name: '哈哈哈1',
                    age: 10,
                },{
                    name: '哈哈哈1',
                    age: 12,
                }]
            }
        },
        methods:{
            say(){
                // console.log('说话')
            },
            broadcast(){
                this.$broadcast('eat')
            }
        }
    }
</script>
<style>
</style>