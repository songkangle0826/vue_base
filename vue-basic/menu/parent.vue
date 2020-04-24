<template>
    <div>
        <Parent v-model.sync="parentData"></Parent>
    </div>
</template>

<script>
    import Parent from './child.vue'
    export default{
        components:{
            Parent
        },
        data(){
            return{
                parentData: '哈'
            }
        },
    }
</script>