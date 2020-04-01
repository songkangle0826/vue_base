/*
* forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数
* 语法:
*   arrayObj.forEach((value,index,arr)=>{},thisValue)
* 注意: forEach() 对于空数组是不会执行回调函数的。
* 是否改变原数组:
*   不改变原数组
* */


let obj = {a:1}
let arr = [1,2,3,4,5,6];
arr.forEach((value,index,arr)=>{
    console.log(value,index,arr,obj)
},obj)

