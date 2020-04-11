<template>
    <div>
        <ul>
            <template v-for="(a,index) in arr">
                <!-- <XXX v-if="render" :render="render" :item="a" :key="a"></XXX> -->
                <!-- <li v-else :key="index">{{ a }}</li> -->

                <!-- 作用域插槽，可以将子组件的内容传递给父组件 -->
                <slot  :a="a" b="2">
                    <!-- 如果没有传递内容才生效 -->
                    <li :key="index">{{ a }}</li>
                </slot>

            </template>
        </ul>
    </div>
</template>
<script>
// 函数组件
import XXX from './xxx'
export default {
    props:['arr','render'],
    components:{
        XXX
    }

}
</script>