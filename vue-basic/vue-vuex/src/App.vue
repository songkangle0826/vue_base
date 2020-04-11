<template>
  <div id="app">
    今年多少岁了？ {{ $store.state.age }}  <br/>
    我的年龄今年？ {{ $store.getters.myAge }}


    <button @click="add">增加年龄</button>


    <button @click="asyncMinus">异步减少</button>



    {{ this.$store.state.a.a }}

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      a: 1
    }
  },
  methods:{
    add(){
      console.log(this)
      this.$store.commit('syncAdd',10);   // 载荷
    },
    asyncMinus(){
      this.$store.dispatch('asyncMinus',10);
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    //console.log(this.$store)
  }
}
</script>
