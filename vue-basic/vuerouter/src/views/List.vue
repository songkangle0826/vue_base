<template>
    <div>
        加到几点
        <ul>
            <li><router-link to="/details/1"> webpack </router-link></li>
            <li><router-link to="/details/2"> nodejs </router-link></li>
            <li><router-link to="/details/3"> javascript </router-link></li>


            <li @click="enter(4)">java</li>
        </ul>
    </div>
</template>
<script>
    export default{
        // 组件级钩子
        beforeRouteEnter(to,from,next){
            console.log(to,from,next)
            next()
        },
        beforeRouteUpdate(to,from,next){},
        methods:{
            enter(index){
                this.$router.push({
                    path: 'details/'+ index
                })
            }
        }
    }
</script>
<style>

</style>