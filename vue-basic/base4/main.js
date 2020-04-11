import Vue from 'vue'
import App from './App'


// 加载全局样式,全局组件,全局指令


// 最底层的子组件出发,改变祖先的数据  (原先一层一层的向上传,简化的一层一层的向上传)
// 儿子找到爸爸,让爸爸的方法出发
Vue.prototype.$dispatch = function(eventName,value){
    let parent = this.$parent;  // 先找第一层的$parent

    //console.log(parent)
    while(parent){
        parent.$emit(eventName,value); // 出发方法   $emit出发父组件传递过来的时间
        parent = parent.$parent;       // 接着向上找
    }
}

// 爸爸找到儿子,让儿子的方法出发(儿子触发的方法.$emit())
Vue.prototype.$broadcast = function(eventName,value){
    let children = this.$children;
    function broad(children){

//        console.log(children)

        children.forEach(child=>{
            //  先找自己的儿子,如果儿子下面 还有儿子 继续查找
            child.$emit(eventName,value)
            if(child.$children){
                broad(child.$children)
            }
        })
    }
    broad(children)
}


// 创建一个全局的发布订阅 偶尔用一次还ok
Vue.prototype.$bus = new Vue({
    data(){
        return{
            busData: 1
        }
    }
});  // vm.$on  vm.$emit



// 1.入口文件  webpack会根据这个入口文件进行打包
// 2.默认会渲染App.vue

new Vue({
    el: '#app',
    render: h=>h(App),           // 用h(createElement)
})