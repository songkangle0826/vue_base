<template>
    <div class="app">{{ data }}</div>
</template>
<script>
    export default({
        data(){
            return{
                data: 'hello world!!!'
            }
        }
    })
</script>
<style scoped>
    .app{
        color: red;
        font-size: 100px;
    }
</style>