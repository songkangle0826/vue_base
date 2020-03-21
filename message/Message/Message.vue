<template>
    <div class="skl-message">
        弹框
    </div>
</template>
<script>
    export default{
        // 每次用户点击按钮时 都是自动增加数据  自动渲染到视图上
        data(){
            return{
                layers: [],
            }
        },
        methods: {
            add(options){
                this.layers.push(options)
            }
        }
    }
</script>