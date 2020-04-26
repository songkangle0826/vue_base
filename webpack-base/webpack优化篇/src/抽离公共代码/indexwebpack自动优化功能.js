// import jquery from 'jquery'

// import moment from 'moment'
// import  'moment/locale/zh-cn'
// moment.locale('zh-cn')
// let date = moment().startOf('hour').fromNow();       // 7 分钟前
// console.log(date)


import React,{ Components } from 'react';
import ReactDOM from 'react-dom';
// import cacel from './test.js'
// import 在生成环境下,会自定去除没有用到的代码
// tree-shaking 把没有用到的代码删除掉
// console.log(cacel.sum(1,2))

const cacel = require('./test')
console.log(cacel)
console.log(cacel.default.sum(1,2))
// CommonJS模块会把结果放在default上
// CommonJS不会删除没有用过的代码




// scope hosting 作用域提升
let a = 1;
let b = 1;
let c = 1;
let d = a+b+c;  // 在webpack中会自动省略一些可以简化的代码
console.log(d)




ReactDOM.render(<div>
    安静安静
</div>,document.getElementById('app'))