/*
* find()方法 返回数组中满足条件的的第一个元素的值,否则返回undefined
*
* 语法:
*   arrayObj.find(function(value,index,arrayObj){},thisValue);
* 返回值:
*   返回符合条件的第一个值
* 是否改变原数组:
*   不改变原数组
* */
let arr = [1,2,3,4,5,6,7];
let obj = {a:1};
let  value = arr.find((value,index,arr)=>{
    console.log(obj,value,index,arr)
    return value == 7;
},obj)
console.log(value)