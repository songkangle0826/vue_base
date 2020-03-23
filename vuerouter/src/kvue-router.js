let Vue;
class VueRouter{
    constructor(options){
        this.$options = options;
        
        // console.log(options)
        
        // 创建一个路由path和route映射
        this.routeMap = Object.create(null);
        
        // 将来当前路径current需要响应式
        // 利用Vue响应式原理可以做到这一点
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }
    
    init(){
        // 绑定浏览器时间
        this.bindEvents();
        
        // 解析路由配置
        this.createRouteMap(this.$options);
        
        // 创建router-link和router-view全局组件
        this.initComponent()
    }
    
    
    bindEvents(){
        window.addEventListener('hashchange',this.onHashChange.bind(this))
        window.addEventListener('load',this.onHashChange.bind(this))
    }
    
    onHashChange(e){
        // http://localhost/#/home
        this.app.current = window.location.hash.slice(1) || '/'
    }
    
    
    createRouteMap(options){
        options.routes.forEach(item=>{
            // ['/home']: { path: '/home',component: Home }
            this.routeMap[item.path] = item;
            
        })
        console.log(this.routeMap,1234)
    }
    
    
    initComponent(){
        // 声明两个全局组件
        Vue.component('router-link',{
            props:{
                to: String
            },
            render(h){
                // 目标是 <a href="to"></a>
                return h('a',{
                    attrs:{
                        href: '#'+this.to
                    }
                },this.$slots.default)
                // return <a href={ this.to }>{ this.$slots.default }</a>
            }
        })
        
        // hash -> current -> render
        Vue.component('router-view',{
            // 箭头函数能保留this指向,这里指向VueRouter实例
            render: (h)=>{
                console.log(this.app.current,this.routeMap)
                const Comp = this.routeMap[this.app.current].component;
                // console.log(Comp)
                return h(Comp)
            }
        })
        
    }
}





// 把Vuerouter变为插件
// 这个函数接收一个Vue高中函数
VueRouter.install = function(_vue){
    Vue = _vue; // 这里保存,上面使用
    // 混入任务
    Vue.mixin({
        beforeCreate(){
            // 这里的代码将来会在外面初始化的时候被调用
            // 这样我们就实现了Vue的扩展
            // this指向谁?   Vue的组件实例,//但是这里只希望根组件执行一次
            
            // console.log(this)
            
            if(this.$options.router){
                
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init()
            }
        }
    })
}



export default VueRouter;