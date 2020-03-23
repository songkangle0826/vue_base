import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Details from '../views/Details.vue'
import page404 from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      component: Home,
      title: '首页',
      meta:{ auth: false },      // 不需要认证
      children: [
          {path: '/list',name: 'List',component: List,title: '列表',},
          // {path: '/details/:id',component: Details},
          {
              path: '/details/:id',
              component: Details,
              title: '列表',
              props: true,
              // 路由及独享守卫
              beforeEnter(to,from,next){
                  console.log(to,from,234565)
                  if(to.params.id){
                      next()
                  }else{
                      console.log(from.path
                      )
                      next(from.path)
                  }
                  
              },
          },    // 以属性的方式接受
      ]
  },
  {
    path: '/about',
    name: 'About',
    meta:{ auth: true },      // 需要认证
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
      // 会匹配所有路径
      path: '*',
      name: '/404',
      // redirect: page404,
      component: page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 全局守卫
router.beforeEach((to,form,next)=>{
    // 要访问/about且未登录需要去登录
    if(to.meta.auth && !window.isLogin){
        if(window.confirm("请登录")){
            window.isLogin = true;
            next()      // 登录成功,继续
        }else{
            next('/');  // 放弃登录,回首页
        }
    }else{
        next();     // 不需要登录
    }
})



export default router
