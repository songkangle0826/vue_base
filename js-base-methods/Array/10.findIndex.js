/*
* findIndex()方法返回数组中满足条件的第一个元素的索引,如果没有满足条件,则返回-1
* 语法:
*   arrayObj.findIndex(callback,thisValue)
* 参数:
*   回调函数
* 返回值:
*   返回满足条件的索引值
* 是否改变原数组:
*  不改变原来的数组
* */

let arr = [1,2,3,4,5,6];
let obj = {a:1};
let index = arr.findIndex((value,index,arr)=>{
    console.log(value,index,arr,obj)
    return value > 3
},obj);
console.log(index)