<template>
    <div>
        <div v-for="layer in layers" :key="layer.id">
            {{ layer.message }}
        </div>
    </div>
</template>
<script>
export default {
    // 每次用户点击按钮是  都是增加数据 自动渲染到视图上
    data(){
        return{
            layers: []
        }
    },
    mounted(){
        this.id = 0
    },
    methods:{
        // 我要提供给外界去调用   $children
        add(options){   // 增加一个序号，时间到了需要根据序号将他移除掉

            let layer = {...options,id:++this.id};
            this.layers.push(layer);

            layer.timer = setTimeout(()=>{
                this.remover(layer)
            },options.duration) 
        },
        remover(layer){
            clearTimeout(layer.timer);      // 清除定时器和移出数据
            this.layers = this.layers.filter(item=> layer.id !== item.id);
        }
    }


    /* 
     * filter 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
     * 注意：
     *  filter不会对空数组进行检测
     *  filter不会改变原来的数组
    */


}
</script>
