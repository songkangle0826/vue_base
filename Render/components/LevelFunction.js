export default{
    data() {
        return {
            val: '你哈'
        }
    },
    props:{
        type: {
            type: String
        }
    },
    methods:{
        onInput(e){
            console.log(e);
            this.val = e.target.value
        }
    },
    render(h){   // 这里的h相当于createElement方法， 会创建一些cnode虚拟节点（对象）
        // createElement('h1',{},'helloworld')

        console.log(this);
        console.log(h('h1',{},this.$slots.default))

        // render中的this指代的时 我们当前组件的实例
        
        // JSX 和 react的不太一样
        // <>都是html，  如果时js {}
        let tag = 'h'+this.type

        // return <tag a={1}>{ this.$slots.default }</tag>  

        // render函数渲染的写法
        // https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx
        return <div>
            { this.val }
            <input value={ this.val } on-input={ this.onInput }></input>
            <div domPropsInnerHTML={'<span>1111</span>'}></div>
        </div>
        
        // h('h'+this.type,{},
        //     [this.$slots.default,h('span',{
        //         on:{
        //             click(){
        //                 alert(1)
        //             },
        //             atttrs:{
        //                 a:1
        //             }
        //         }
        //     },'helloWorld')]
        // )
    }
}



// 函数组件