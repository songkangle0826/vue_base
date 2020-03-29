## 技术选型上为什么选择vue，vue有哪些缺陷
### vue的特性
```
1.轻量级的框架
2.双向数据绑定
3.指令
4.插件
5.声明式的框架
```

### vue的优点
```
1.简单灵活
2.灵活的渐进式
3.轻量高效
	压缩之后20k大小
	虚拟DOM
4.MVVM
	数据驱动视图
	常规的操作方式都是DOM
	普通的javascript数据
5.组件化
	提高开发效率
	方便重复使用
```
### vue的缺陷
```
1.Vue不支持IE8
2.不利于seo
3.单页面首屏加载太慢
4.功能复杂时,写的太复杂.
5.在methods方法中,this的指向永远是vm,不能更改(缺陷)
```

## 什么是库,什么是框架?
```
库是将代码集合成一个产品,库是我们调用库中的方法实现自己的功能.
框架则是为解决一类问题而研发的产品,框架使我们在指定的位置编写好代码,框架帮我们调用.
框架与库之间最本质的区别在于控制权:
	库是你自己调用.
	框架是调用你写的.(框架有自己的思想)
```


## MVC和MVVM
```
MVC(Model View Controller) : 是模型(Model)－视图(View)－控制器(controller)
MVVM(Model-View-ViewModel) : 是模型(Model)－视图(View)－视图模型(ViewModel)

```


## 声明式和命名式
```
命名式就是自己写for循环(命令按照自己的方式得到结果)
声明式就是利用数组的方法forEach(我们想要的循环,内部帮我们去做(不知道内部是怎么执行的))

声明式与命名式的区别:
	命名式自己可以控制代码,按照自己写法来写
	声明式调用方法(如数组的map,forEach等)
```




## computed和watch有什么区别

## Vue的生命周期,每个生命周期具体适合那些场景

## Vue中的ref是什么?

## Vue动画的生命周期?

## Vue如何编写自己的指令?

## 内容分发
### 匿名插槽

### 具名插槽

### 作用域插槽

## vue-router
在@vue/cli3.0以上使用vue-router
安装vue add router


### 路由视图
```html
<router-view>
```
### 导航链接
```html
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
```

### 为什么要Vue.router(Router)?

### <router-view />、<router-link to="/"></router-link>哪里来的

### 他们的功能是怎么实现的

### 路由嵌套
应用页面通常有多层嵌套的组件组合而成的.同样的,URL中隔断动态路径也按照某种结构对应嵌套的各层组件
- 创建List.vue
- 配置路由router.js
```javascript
let vueRouter = {
    path: '/',
    component:Home,
    children:[{
        path: '/list',
        name: 'list',
        component: List
    }]
}
```
- 添加路有插座,Home.vue
```vue
<template>
    <div class="home">
        <h1>首页</h1>
        <router-view></router-view>     <!--  这里相当于插座,把页面插进去  -->
    </div>
</template>
```

### 动态路由
示例
- 页面取值
```vue
<template>
    <div>
        商品详情: 以路由的方式取{{ $route.params.id }}  
        <br/>
        <br/>
        商品详情: 以属性的方式取{{ id }}  
    </div>
</template>
<script>
export default{
    props: {
        id:{
            type: String,
            default: ''
        }
    }
}
</script>
```
- 路由配置
```javascript
let vueRouter = {
    path: '/',
    component:Home,
    beforeEnter(){
        
    },
    children:[
        {path: '/list',name: 'list',component: List},
        // {path: '/details/:id',component: Details},
        {path: '/details/:id',component: Details,props: true},
    ]
}
```


### 路由守卫
路由导航过程中有若干个生命周期钩子,可以在这里实现逻辑控制
- 全局守卫,router.js

### 路由独享守卫
```javascript
beforeEnter(to,from,next){
    路由内部知道自己需要认证
    if(isShow){
        
    }else{
        
    }
}
```




### 完整的导航解析流程
```javascript
/*
* 1.导航被触发
* 2.调用全局的beforeEach守卫
* 3.在重用的组件里调用beforeRouteUpdate守卫
* 4.在利用配置里调用beforeEnter
* 5.再激活的组件里调用beforeRouteEnter
* 6.调用全局的beforeResolve守卫(2.5+)
* 7.导航被确认
* 8.调用全局的afterEach钩子
* 9.触发DOM更新
* */
```


### vue-router拓展
#### 动态路由
利用$router.addRoutes()可以实现动态路由添加,常用于用户权限控制
```javascript
router.js
返回的数据可能是这样的
[{
    path: '/',
    name: 'home',
    component: Home
}]

// 异步获取路由
api.getRoutes().then(routes=>{
    const routeConfig = routes.map(route=>mapComponent(route));
    router.addRoutes(routeConfig)
})


// 映射关系
const conpMap = {
    'Home': Home,                               // 同步
    'Home': ()=> import('./view/Home.vue')      // 异步
}

// 递归替换
function mapComponent(route){
    route.component = compMap[route.component];
    if(route.children){
        route.children = route.children.map(child=>mapComponent(child))
    }
    return route;
}
```

### 面包屑
利用$route.matched课得到路由匹配数组,按顺序解析可得路由层次关系
```javascript
watch:{
    $route(){
        console.log(this.$route.matched);
        this.crumbData = this.$route.matched.map(m=>m.name);
    }
}
```

### 声明式的导航
```
    <router-link :to="...">
```

### 编程式的导航
#### router.push(location, onComplete?, onAbort?)
```javascript
// query 
// 带查询参数，变成  /register?a=1
router.push({
    path: 'register',
    query: {
        a: 1
    }
})
// 命名的路由 /
router.push({
    name: 'user', 
    params: { 
        userId: '123' 
    }
})
/*
  params和query传参的区别?
    params不会带在导航中,一刷新就没有了
    query会带在导航中,刷新还在
*/

```


#### router.replace(location, onComplete?, onAbort?)

// 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录


## Vue-Vuex原理
vuex是vue的状态管理工具，为了更方便实现多个组件共享状态
通过流程图来掌握vuex工作原理



## Vue-SSR

客户端渲染(CSR)
客户端渲染简单理解就是浏览器发送页面请求，服务器返回的是一个模板页面，浏览器从上至下解析过程中需要发送ajax请求获取数据，最后再调用模板引擎（art-template等）渲染HTML结构，并把渲染后的结果添加到页面指定容器中。

缺点: 不利于SEO,首屏加载过慢


服务端渲染(SSR)
简单理解就是浏览器发送请求后，服务器把客户端网页和数据在后台渲染解析，之后把渲染后的结果返回客户端。


缺点: 服务器压力较大


SSR体验: nuxt.js

Nuxt.js是一个基于Vue.js的通用应用框架
通过对客户端/服务端基础架构的抽象组织,,Nuxt.js主要关注的是应用的UI渲染


// 全局安装create-nuxt-app
npm i -g create-nuxt-app 






## Vue运行的原理

### Vue工作机制
初始化:

在new Vue()之后,Vue会调用进行初始化,会初始化声明周期,事件,props,methods,data,computed与watch等
其中最重要的是通过Object.defineProperty设置setter和getter,用来实现[响应式]和[依赖收集]

初始化之后用$mount挂载组件


### 编译: 
编译分为单个阶段:

1.parse: 使用正则解析template中的vue的指令(v-xxx)变量等等,形成抽象的语法树AST

2.optimize: 标记一些静态节点,用作后面的性能优化,在diff的时候直接略过

3.generate: 把第一步生成的AST转换为渲染函数render function

### 响应式
这一块是vue最核心的内容,初始化的时候通过defineProperty定义对象getter,setter,设置通知机制
当编译生成放入渲染函数被式实际渲染的时候,会触发getter进行依赖收集,在数据变化的时候,触发setter进行更新

### 虚拟DOM
Virtual Dom是react首创,Vue2开始支持,就是用javascript对象来描述dom结构,数据修改的时候,我们先把修改虚拟dom中的数据,然后数组做diff,最后在汇总所有的diff,力求做最少的dom操作,毕竟js里对比很快,而真实的dom操作太慢
虚拟DOM,减少页面更新的次数与模块
```javascript
let obj = {
  tag: 'div',
  props: {
      name: '开课吧',
      style: {color:red},
      onClick: xx
  },
  children:[
      { 
          tag: 'a',
          text: 'click me'
      }
  ]
}
```

### 更新视图
数据修改触发setter,然后监听器会通知进行修改,通过对比新旧vdom树,得到最小的修改,就是patch,然后只需要把这些差异修改即可


### 依赖收集和追踪









