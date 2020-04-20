import '@babel/polyfill';  // 转换高级语法

import logo from './1.jpeg';        // 把图片引入,返回的结果是一个新的图片
console.log(logo)
// webpack打包我们的图片
// 1).在js中创建图片来引入
// 2).在css引入 background('url')
// 3).在img中引入

// 使用file-loader默认会在内部生成一张图片到build目录下
// 使用html-withimg-loader,把页面上的图片解析,解析html文件
// url-loader 当我们的图片小于多少k的时候,用base64来转换

let image = new Image();
image.src= logo;      // 就相当于一个字符串
document.body.appendChild(image)





// import $ from 'jquery';
// console.log($)
// console.log(window.$);      // undefined


// expose-loader 暴露全局的loader  内联的loader
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


// 在每个模块中都注入$
// console.log($)
/*
*
* new webpack.ProvidePlugin({
    $: 'jquery',       // 在每个模块中都注入$(jquery)符合
  })
* */




// pre 前面执行的loader
// normal 普通的loader
// post 普通的loader
// 内联的loader




// const common = require('./common')
// require('./index.css');
//
require('./ha.less');
// console.log('哈哈哈哈',common);
//
//
// let fn = ()=>{
//     console.log('log')
// };
// fn();
//
// @log
// class A{    // new A() a
//     a = 1;
// }
// let a = new A();
// console.log(a.a)
//
//
// function log(target){
//     console.log(target,'12345')
// }
