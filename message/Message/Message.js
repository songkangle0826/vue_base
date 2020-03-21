import Vue from 'vue';
import MessageComponent from './Message.vue'

const  Message = {
    success(options){
        // options就是当前弹出来的框
        // $mount()  document.body.appendChild
        
        // 点击弹框时,需要将.vue文件挂载到 内存中
        let vm = new Vue({
            render: h=>h(MessageComponent)
        }).$mount()
        
        //将渲染好的内容放到页面中去
        document.body.appendChild(vm.$el)
        
        // 通过数据去驱动视图
    }
}



export  {
    Message
}