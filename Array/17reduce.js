/*
* reduce() 方法对数组中的每个元素执行一个由您提供的rreducer函数,将其结果汇总成单个元素返回
* 语法:
*   objarray.reduce(callback,initialValue)
* 参数:
*   callback: 提供的函数
*      accumulator: 累计器
*      value: 原数组
*      index: 索引
*      array: 原数组
*   initialValue: 初始值:若没有传该值,则为数组的第一项
* 返回:
*   单个返回值
* 是否改变原数组:
*   不改变元数组
* */

let arr = [1,2,3,4,5];
let value = arr.reduce((accumulator,value,index,array)=>{
    console.log(accumulator,value,index,arr);
    return accumulator+value
},10)
console.log(value,arr);
