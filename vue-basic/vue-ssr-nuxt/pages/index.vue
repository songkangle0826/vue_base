<template>
    <div class="container">
      <h2>商品列表页</h2>
      <ul>
        <li v-for="good in goods" :key="goods.id">
          <nuxt-link :to="`/detail/${good.text}/${good.id}`">{{ good.text }}</nuxt-link>
          {{ good.text }}
        </li>
      </ul>
    </div>
</template>

<script>

export default {
    head(){
        return {
            title: '课程列表',
            meta: [{name:'description',hid:"description",content:"set"}],
            link: [{rel:'favicon',href:"favicon.ico"},{href:'./page.css'}]
        }
    },
    data(){
        return{
            goods:[
                {id: 4,text:'Webpack全栈架构师',price: 8999},
                {id: 5 ,text:'python全栈架构师',price: 1999}
            ]
        }
    },
    // 传一个上下文对象
    async asyncData(context){
        console.log(1,context.app.data.goods)
        const {code,goods} = await context.$axios.$get('/api/goods');
        if(code){
//            let goods = goods.concat(co)
            return {goods}
        }else{
            return '就安静安静'
        }
    },

}
</script>

<style>
</style>
