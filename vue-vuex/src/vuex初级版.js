let Vue;

// 封装一个方法
const forEach = (obj,cb)=>{
    Object.keys(obj).forEach((key)=>{
        cb(key,obj[key])
    })
}

// new Vuex.Store
class Store{
    constructor(options={}){
        // 将用户的状态放到了store中

        this.s = new Vue({  //核心 定义了响应式变化， 数据更新，更新视图
            data () {
                return {
                    state: options.state
                }
            }
        }) // 用来维护全局数据的

        
        let getters = options.getters;
        this.getters = {};
        // 计算属性
        /*
            Object.keys(getters).forEach((getterName)=>{
                Object.defineProperty(this.getters,getterName,{
                    get:()=>{
                        return getters[getterName](this.state)
                    }
                })
            })
        */
        forEach(getters,(getterName,fn)=>{
            Object.defineProperty(this.getters,getterName,{
                get:()=>{
                    return fn(this.state)
                }
            })
        })


        let mutations = options.mutations;  //获取所有的同步的更新操作
        this.mutations = {};

        /*
            Object.keys(mutations).forEach((mutationName)=>{
                // 这里相当发布订阅中的订阅
                this.mutations[mutationName] = (payload)=>{
                    // @1 内部的第一个参数就是状态
                    mutations[mutationName](this.s.state,payload)
                }
            })
        */
        forEach(mutations,(mutationName,fn)=>{
            this.mutations[mutationName] = (payload)=>{
                fn(this.state,payload)
            }
        })




        let actions = options.actions;
        this.actions = {};

        forEach(actions,(actionName,fn)=>{
            this.actions[actionName] = (payload)=>{
                fn(this,payload);
            }
        })



        this._modules = new ModuleCollection();     // 把数据格式化成为一个 想要的树结构




    }
    // 提交更改，会在当前的store上找到对应的函数执行
    commit = (mutationName,payload)=>{  // 保证this,es7的写法
        // @1 这里相当于发布订阅中的发布
        this.mutations[mutationName](payload)
    }

    dispatch = (actionName,payload)=>{
        this.actions[actionName](payload);   // 源码里有一个变量，来控制是否是通过mutation来更新状态的
    }


    get state(){  // 类的属性访问器
        return this.s.state
    }

}




// 给所有的组件都增加一个store属性
const install = (_vue)=>{
    Vue = _vue;   // vue的构造函数
    console.log('install');
    // vue的组件渲染顺序
    Vue.mixin({
        // 创建之前会创建
        beforeCreate(){
            console.log('ok',this);

            // 没有将$store放在原型上

            // 我需要拿到store，给每个组件都增减store属性
            if(this.$options && this.$options.store){
                // 给根实例上增加$store属性
                // 根实例
                this.$store = this.$options.store
            }else{
                if(this.$parent){
                    // 有可能单独创建了一个实例没有父亲，那就无法获取到
                    this.$store = this.$parent.$store
                }
            } 
        },
        created(){
            console.log(this)
        },
        mounted(){
            
        }
    }) //混入
}





export default {
    // 给用户提供一个install方法，默认会被调用
    install,
    Store
}




// 源码只会将 当前用户传递的内容，进行格式化
// let root = {
//     _raw: options,
//     _children:{
//         a:{
//             _raw:{},
//             _children:{},
//             state:{a:1}
//         },
//         b:{
//             _raw:{},
//             _children:{},
//             state:{b:1}
//         }
//     },
//     state: options.state
// }