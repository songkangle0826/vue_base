import Vue from 'vue'
import Vuex from '../vuex初级版.js/index.js'

Vue.use(Vuex)  // 1.使用这个插件的install方法  

export default new Vuex.Store({   //导出的是store的一个实例



modules:{
  a:{
    state: {a:1}
  },
  b:{
    state: {b:1}
  }
},


  state: {    // 统一的状态管理
    age: 10,
  },
  // getters只能放技术按属性
  getters:{
    myAge(state){
      return state.age + 10
    }
  },
  mutations: { // 可以更改状态
    syncAdd(state,params){
      state.age += params;
    },
    asyncMinus(state,payload){
      state.age -= payload
    }
  },
  actions: {  // 异步提交更改
    asyncMinus({commit},payload){ // 异步获取完后，提交到mutations中
      setTimeout(()=>{
        commit('asyncMinus',payload)
      },1000)
    }
  },
})
