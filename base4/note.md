## 安装工具
- npm install @vue-cli@3 -g
- npm install -g @vue/cli-service-global@3

## 组件通信
- 父传递给子组件数据  props和$emit
- $parent $children   绑定$on 只能通过绑定$on的那个组件来触发
- $attrs  $listeners
- provide inject  和 context  (可以在父组件中声明一个公共数据),在子组件中可以注入 ---原理 (比较混乱,名称问题,他不会在业务代码中使用)  写组件库,多级通信为了
- ref 获取真实的dom元素,如果放到组件上,代表的是 当前组件的实例,父组件中可以直接调用子组件的方法和数据
- eventbus (混乱)
- $root 根组件



## 内容分发
### 匿名插槽

### 具名插槽

### 作用域插槽

## vue-router
在@vue/cli3.0以上使用vue-router
安装vue add router