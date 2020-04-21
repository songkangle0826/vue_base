## 什么是webpack?
webpack可以看做是模块打包机;他做的事情是,分析你的项目结构,找到javascript模块以及其他的一些浏览器不能直接运行的扩展语言(Less,TypeScript等),并将其打包为合适的格式以供浏览器使用.

## webpack可以做的事情?
代码转换    把浏览器不支持的文件转换(如less,Sass,TypeScript)为浏览器支持的代码
文件优化    压缩代码,合并文件,减少体积等  优化点
代码分割    懒加载
模块合并    
自动刷新    热更新
代码校验          
自动发布

## webpack安装
- 安装本地的webpack
- yarn add webpack webpack-cli(命令提示工具) -D
- npm i webpack webpack-cli --save-dev(开发环境) 

从npm5.2版本后,提供了一个命令: npx, 基于这个命令可以执行本地安装的模块

$npx webpack  基于npx执行了webpack命令,而这个命令就是实现打包部署的
- 找到node_modules/.bin
- 要求我们得有webpack.cmd文件
- 执行webpack.cmd

也可以从package.json中配置可执行的
```
"scripts": {
    "build": "webpack"
}
```


## 基础打包语法
> SRC: 存储项目开发的源文件
> DIST: 打包后的文件目录

## webpack可以进行0配置
从第四代版本,可以支持零配置
- 打包工具 -> 输出后的结果(js模块)
- 打包(支持我们的js模块化)

## 手动配置webpack
- 默认配置的的文件名为webpack.config.js护着webpackfile.js


## commonJS和es6Module
```javascript
/*
* ES6Module规范(引入必须在最开始)
* 导入:import { bind } from './index'
* 导出:export default = bind 或者 export { bind }
* */

/*
* COMMOMJS规范(NODE)
* 导入: let { debounce } = require('url')
* 导出: module.exports = { debounce }
* */
```

### 运行文件的几种方式
- 在package.json中scripts中配置  webpack --config webpack.config多入口配置.js
- npx webpack --(加这个--,后面的字符表示为字符串) --config webpack.config多入口配置.js


### 启服务
```javascript
yarn add webpack-dev-server -D
```


### html-webpack-plugin
输出引用的css和js文件到index.html中
```javascript
module.exports = {
    plugins:[   // 数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: src基础篇,       // 模板
            filename: 'index.html',             // 输入的名字
            minify:{ // 最小化操作
                removeAttributeQuotes: true,    // 去双引号等
                collapseWhitespace: true,       // 折叠压缩到一行
            },
            hash: true,                         // 加版本
        }) 
    ]
}
```


### webpack解析css模块

```javascript

```


#### 给css加前缀(autoprefixer)
- 安装
    - postcss-loader
    - autoprefixer

npm install postcss-loader autoprefixer -D

- 配置
```javascript
// 1. -- 在webpack.config.js中配置
module.exports = {
    module:{
        rules:[
           {
               // less(less less-loader) sass(node-sass sass-loader) stylus(stylus stylus-loader)
               test:/\.less$/,
               use: [
                   MiniCssExtractPlugin.loader,
                   'css-loader',       // @import 解析路径
                   'postcss-loader',
                   'less-loader'       // 把less -> css
               ]
           } 
        ]
    }
}
// 2. 新建一个postcss.config.js
module.exports = {
    plugins:[require('autoprefixer')]
}
```



### webpack处理js
- 使用babel-loader(babel转换器) @babel/core(babel的核心模块)  @babel/preset-env(按照什么模式转换)

- babel-loader
- @babel/core
- @babel/preset-env
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-decorators     // 解析class 类的装饰器
- @babel/plugin-transform-runtime       // 解析promise和generator
- @babel/runtime (as a production dependency生产依赖)// 上线需要,解析promise和generator

- @babel/polyfill   (补丁)       // 生产依赖 (解析如'aa'.includes('a'))


- 校验语法规范
    - eslint 
    - eslint-loader

#### 设置全局变量
- expose-loader

以jquery为例
```javascript
/*
  // 方法1
    import $ from 'expose-loader?$!jquery';
    console.log($)              //
    console.log(window.$);      // 这样就挂载到window上了
  // 方法2
    在webpack中配置
     {
        test: require.resolve('jquery'),
        use: 'expose-loader?$',         // 把jq设置为全局变量
     }
*/
```

#### 给每个模块都注入
```javascript
new webpack.ProvidePlugin({
    $: 'jquery',       // 在每个模块中都注入$(jquery)符合
})
```





### sourceMap




### 跨域请求的三种方式





