import Vue from 'vue'
import MessageComponent from './Message.vue'


// 单例--- 就是将这个new Vue的操作 只做一次
let instance;
let getVmInstance = ()=>{
    // instance是全局实例
    instance = new Vue({    // 就一个孩子
        render: h=>h(MessageComponent)
    }).$mount();
    // 把生成的结果放到页面中去
    document.body.appendChild(instance.$el);
}



const Message = {
    success(options){
        // options 就是当前弹出来的框
        
        // $mount()  -- 手动渲染   document.body.appendChild(); --- 压入到body中 
        

        // 点击弹出框 需要将.vue文件挂载到内存中


        // 就是将这个new Vue的操作 只做一次
        /* 
            let vm = new Vue({
                render: h=>h(MessageComponent)
            }).$mount();    // 注意要手动挂载

            // 将渲染好的内容 放到页面中
            // document.body.appendChild(vm.$el);

        */
        if(!instance){  // 默认如果实例不存在，我就创建一个实例
            getVmInstance();
        }
        // 通过数据来驱动
        instance.$children[0].add(options)

    
    },
    // 信息
    info(){

    },
    // 警告
    warn(){

    },
    // 报错
    error(){

    },
}


export {
    Message
}


export default{
    // _Vue 是当前的构造函数
    install(_Vue){
        // 1).注册全局组件 
        // 2）.注册全局指令
        // 3）.往原型上添加方法，属性
        let $message = {}
        // 做一个映射表，把对应的方法放到￥message对象中
        Object.keys(Message).forEach(key=>{
            $message[key] = Message[key]
        })
        // 挂载到原型上
        // 一般使用新对象的时候，采用拷贝的形式，不会破坏原来的
        _Vue.prototype.$message = $message
    }
}