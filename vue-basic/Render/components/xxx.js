export default{
    props:['render','item'],
    render(h){
        return this.render(h,this.item)
    }
}


// 借助了vue函数组件，渲染用户的自定义行为，把结果进行替换