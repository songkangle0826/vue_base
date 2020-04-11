<template>
    <div>app
        <Parent @say="say"></Parent>



        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <!--<button @click="broadcast">出发所有子组件带有eat的方法</button>-->
    </div>
</template>
<script>
    // 组件使用的三步曲: 声明+注册+使用
    import Parent from './components/parent'
    export default{
        provide(){  // 暴露全局方法
            return{
                vm: this
            }
        },
        // render(){}  模板编译好后,会打包放到render函数中
        components:{
            Parent,
        },
        data(){
            return{
                app: 'app'
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