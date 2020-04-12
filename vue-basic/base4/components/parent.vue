<template>
    <div>
        <h1>parent</h1>
        父亲有{{ money }} <button @click="say">说话</button>

        <!-- 我需要给儿子绑定一个自定义事件 -->
        <!--vm.$on('change',change) 后面的值都是属于父组件的-->
        <Son1 :money="money" @eat="eatE" @change-item="changeParent"></Son1>



        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>


        <!--<Son2 :count="count" @update:count="changeCount"></Son2>-->
        <!--<Son2 :count="count" @update:count="newValue=>count=newValue"></Son2>-->
        <!--<Son2 :count.sync="count"></Son2>  &lt;!&ndash; 语法糖 这个写法是上面的替代品,默认组件内部需要出发 update:count&ndash;&gt;-->

        <!--<Son2 :value="count" @input="newValue=>count=newValue"></Son2>-->
        <!--<Son2 v-model="count"></Son2>       &lt;!&ndash; 语法糖 这个写法是上面的替代品,:value="count" @input="newValue=>count=newValue" &ndash;&gt;-->

        <!--v-model这个双向绑定相当于做了两个操作：（1）给当前这个组件添加了一个value属性 （2）给当前这个组件绑定了一个input事件；-->
        <!--https://blog.csdn.net/qq_29582173/article/details/102155220?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1-->

        <!--
            v-model: 局限性只能传递一个属性, 如果只有一个 可以使用v-model
            多个依然需要使用.sync
        -->

        <!-- click input 自定义事件 名字和原生事件的名字一样 -->
        <!-- @click.native 绑定元素事件  就是给组件的最外层元素上绑定事件 -->
        <Son2 ref="son2" :money="money" :count="count" @click="eat" @click.native="eat"></Son2>



    </div>
</template>
<script>
    import son1 from './son1'
    import son2 from './son2'
    export default{
        components:{
            Son1: son1,
            Son2: son2
        },
        data(){
            return{
                money: 100,
                parent: 'parent',
                count: 1
            }
        },
        methods:{
            changeCount(newValue){
                this.count = newValue
            },
            changeParent(newValue){
                this.money = newValue
            },
            say(){
                this.$dispatch('say',200)
            },
            eat(){
                console.log('eat')
            },
            eatE(){

            }
        },
        mounted(){
            console.log(this.$refs.son2)
            this.$refs.son2.show()  // 直接在父组件上拿到组件中的实例,不要重名


            let self = this;
            this.$bus.$on('change',function(value){
                console.log('绑定')
                console.log(this.busData = value);
                self.money = value
            })


            //



        }
    }
</script>
