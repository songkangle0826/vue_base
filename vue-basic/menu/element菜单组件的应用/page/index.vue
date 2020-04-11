<template>
    <div clas="page-index">
        <h3>首页</h3>


        <el-menu default-active="1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 @select="handleSelect"
        >

            <!-- 第一层 -->
            <template v-for="m in menu">

                <!-- 这个是一层的  muenItem.children存在? -->

                    <el-menu-item :index="m.id" v-if="m.children.length==0">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{ m.name }}</span>
                    </el-menu-item>

                    <el-submenu :index="m.id" v-if="m.children.length!=0">

                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ m.name }}</span>
                        </template>

                        <!-- 第二层 -->
                        <template v-for="mChild in m.children">

                            <el-menu-item :index="mChild.id" v-if="!mChild.children">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{ mChild.name }}</span>
                            </el-menu-item>

                            <el-submenu :index="mChild.id" v-if="mChild.children">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>{{ mChild.name }}</span>
                                </template>


                                <!-- 第三层 -->
                                <template v-for="mGrandson in mChild.children">

                                    <el-menu-item :index="mGrandson.id" v-if="!mGrandson.children">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">{{ mGrandson.name }}</span>
                                    </el-menu-item>

                                    <el-submenu :index="mGrandson.id" v-if="mGrandson.children">
                                        <template slot="title">
                                            <i class="el-icon-location"></i>
                                            <span>{{ mGrandson.name }}</span>
                                        </template>

                                    </el-submenu>

                                </template>


                            </el-submenu>

                        </template>

                    </el-submenu>

            </template>

        </el-menu>



    </div>
</template>
<script>
    export default({
        data(){
            return{
                menu: [
                    {
                        id: '1',
                        name: '首页',
                        path: '/index',
                        children:[]
                    },
                    {
                        id: '2',
                        name: '个人中心',
                        path: '/center'
                        children:[
                            {
                                id: '3',
                                name: '我的提问',
                                path: '/center/question',
                            }
                        ]
                    },
                    {
                        id: '4',
                        name: '总管理员权限',
                        children:[
                            {
                                id: '6',
                                name: '管理员权限',
                                children: [
                                    {
                                        id: '7',
                                        name: '李鹏管理员',
                                        path: '/qx/one/lp',
                                    },
                                    {
                                        id: '8',
                                        name: '宋康乐管理员',
                                        path: '/qx/one/skl',
                                    }
                                ]
                            }
                        ]
                    }
                ],
                obj:{
                    1: '/index',
                    2: '/center'
                    3: '/center/question',
                    7: '/qx/one/lp',
                    8: '/qx/one/skl'
                }
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                if (this.obj[key]){
                    this.$router.push({
                        path: this.obj[key]
                    })
                }
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key,keyPath){
                console.log(key,keyPath)

                if (this.obj[key]){
                    this.$router.push({
                        path: this.obj[key]
                    })
                }

            }
        }
    })
</script>