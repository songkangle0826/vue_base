/*
* compile.js 遍历dom结构,解析指令和插值表达式
* */

class Compile{
    // el: 待编译的模板
    // vm: kvue的实例
    constructor(el,vm){
        this.$vm = vm;
        this.$el = document.querySelector(el);
        
        // 把模板中的内容移到片段中操作
        this.$fragment = this.node2Fragment(this.$el);
        
        // 执行编译
        this.compile(this.$fragment)
        
        // 放回$el中
        this.$el.appendChild(this.$fragment)
        
    }
    
    
    node2Fragment(el){
        // 创建片段,游离于真实dom之外
        const fragment= document.createDocumentFragment();
        let child;
        while(child = el.firstChild){
            fragment.appendChild(child)
        }
        return fragment;
    }
    
    // 编译
    compile(el){
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node=>{
            if(node.nodeType == 1){
                // 元素
                console.log('编译元素'+node.nodeName)
                
                // 编译文本
                this.compileElement(node)
                
            }else if (this.isInter(node)){
                console.log('编译插值文本'+node.textContent)
                
                // 编译我们的文本
                this.compileText(node)
                
                
            }
            
            // 递归子组件
            if(node.children && node.childNodes.length > 0){
                this.compile(node)
            }
            
        })
        
    }
    
    isInter(node){
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
    
    
    // 文本的替换
    compileText(node){
        // console.log(RegExp.$1,2345);
        console.log(this.$vm[RegExp.$1],1234)
        node.textContent = this.$vm[RegExp.$1]
        
        // 表达式
        const exp = RegExp.$1;
        
        // node 接点
        // exp 表达式
        // text 一个文本操作
        this.update(node,exp,'text')
    }
    
    
    update(node,exp,dir){
        // 动态的
        const updator = this[dir+'Updator'];
        updator && updator(node,this.$vm[exp])      // 首次初始化更新
        
        // 创建Watcher实例,依赖收集完成了
        new Watcher(this.$vm,exp,function(value){
            updator && updator(node,value)
        })
    }
    
    textUpdator(node,value){
        node.textContent = value
    }
    
    compileElement(node){
        // 关系属性
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr=>{
            // 规定: k-xxx 执令
            const attrName = attr.name;
            const exp = attr.value;
            if(attrName.indexOf('k-')==0){
                // 指令
                const dir = attrName.substring(2);
                // 执行
                this[dir] && this[dir](node,exp);
            }
        })
    }
    
    // text指令
    text(node,exp){
        this.update(node,exp,'text');
    }
    
}

