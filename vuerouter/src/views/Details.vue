<template>
    <div>
        哈哈哈
        商品的id: {{ $route.params.id }}<br/>
        以属性的方式: {{ id }}
    </div>
</template>
<script>
    export default{
        props: ['id'],
        created(){
            console.log(this.$route.params.id)
        },
        mounted(){
            console.log(this.$route.matched,1234)
        }
    }
</script>
<style>

</style>