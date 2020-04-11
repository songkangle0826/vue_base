/*
* filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
* 语法:
*   array.filter(function(currentValue,index,arr), thisValue)
* 参数:
*   回调函数:
*   thisValue: 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
* 注意:
*   filter() 不会对空数组进行检测。
*   filter() 不会改变原始数组。
* 返回值:
*   返回一个新的数组
* */

let arr = [1,2,3,4,5,6];
let obj = {a:11}
let filterArr = arr.filter((item,index,arr)=>{
    console.log(item,index,arr,obj)
    return item > 3
},obj)
console.log(arr,filterArr)