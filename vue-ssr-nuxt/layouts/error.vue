<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else>应用发横错误异常</h1>

        <p>{{error}}</p>
        <nuxt-link to="/">首页</nuxt-link>
    </div>
</template>
<script>
    export default{
        layout: 'blank',
        props: ['error'],
    }
</script>
<style>
</style>
