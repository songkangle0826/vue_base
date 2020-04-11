/*
* map() 方法,创建一个新的函数, 其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
* 语法:
*   objArray.map(callback,thisValue);
* 参数:
*   callback: 函数
*   thisValue: 执行 callback 函数时值被用作this。
* 返回值:
*   一个新的数组
* 是否改变原数组
*   不改变
* */

let arr = [1,2,3,4,5];
let obj = { a:1 }
let arrMap = arr.map((value,index,arr)=>{
    console.log(value,index,arr,obj)
    return value *2
},obj);
console.log(arr,arrMap)