import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



const Index = resolve => require(['../page/index.vue'], resolve);



export const routers = [
    {
        path: '/index',
        name: 'index',
        component: Index
    }
];

export default new Router({
  routes: routers,
  mode: 'history',
})
