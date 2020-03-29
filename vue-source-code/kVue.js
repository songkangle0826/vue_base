// 定义Kvue构造函数
class KVue{
    constructor(options){
        // 保存选项
        this.$options = options;
        
        // 传入data
        this.$data = options.data;
        
        // 响应化处理
        this.observer(this.$data)
        
        
        // new Watcher(this,'name')
        // this.name  // 读一次,触发依赖收集
        //
        // new Watcher(this,'bar.bartter')
        // this.bar.bartter
        //
        // new Watcher(this,'bar')
        // this.bar
        
        new Compile(options.el,this)
        
        
        if(options.created){
            options.created.call(this);
        }
        
        
    }
    
    
    observer(value){
        if(!value || typeof value!== 'object'){
            return
        }
        
        // console.log(value)
        
        // 遍历vlaue
        Object.keys(value).forEach(key=>{
            // 响应式处理
            this.defineReactive(value,key,value[key]);
            // 把$options.data中的值代理到new vue的实例上
            this.proxyData(key);
        })
    }
    
    
    defineReactive(obj,key,val){
        // 如果val还是对象,我们继续递归添加getter
        this.observer(val);
        
        
        // 定义了一个Dep
        const dep = new Dep();  // 每个Dep实例和data中么个可以有一对一关系
        
        
        // 给obj的每一个key定义一个拦截
        Object.defineProperty(obj,key,{
            get(){
    
                console.log(Dep.target)
                // 依赖收集过程
                Dep.target && dep.addDep(Dep.target);
                
                // console.log('获取值')
                return val;
            },
            set(newValue){
                if(newValue !== val) {
                    // console.log( key+ '属性更新了');
                    val = newValue;
                    dep.notify()
                }
            }
        })
    }
    // 代理的功能
    proxyData(key){
        // this值的就是kVue的实例
        Object.defineProperty(this,key,{
            get(){
                return this.$data[key];
            },
            set(newValue){
                this.$data[key] = newValue
            }
        })
    }
    
}


// 创建Dep: 管理所有的Watch
class Dep{
    constructor(){
        // 存储所有的依赖
        this.watcher = []
    }
    
    addDep(watcher){
        // dep === 压入的是wtacher的实例
        this.watcher.push(watcher)
        console.log(this.watcher)
    }
    
    notify(){
        this.watcher.forEach(watcher=>watcher.update())
    }
}

// 创建Watcher: 保存data中数值和页面中的挂钩关系
class Watcher{
    // vm某个具体vue组件的实例
    // key是某个组件data中的key
    constructor(vm,key,cb){
        // 创建实例时,立即将该实例指向Dep,target便于依赖收集
        // target是Dep的静态属性
        
        console.log(vm,key)
        
        
       
        this.vm = vm;
        this.key = key;
        this.cb = cb;
    
        Dep.target = this;
        this,vm[this.key]; // 触发依赖收集
        Dep.target = null; // 防止发生串改
        
    }
    
    // 更新
    update(){
        console.log(this.key+'更新了')
        // console.log(this.vm,234565434)
        // console.log(this.key,this.vm[this.key])
        this.cb.call(this.vm,this.vm[this.key]);
    }
    
}



/*
* 编译 compile(坑派o)
* 核心任务:
*   1.获取并遍历DOM树
*   2.文本节点,获取{{}}格式的内容并解析
*   3.元素节点: 访问节点特行,获取k-和@开头的内容各个解析
* */


