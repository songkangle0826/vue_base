/*
* sort()方法 ==用于对数组的元素进行排序。
* 语法:
*   arrayobj.sort(sortby)
* 参数:
*   sortby: 可以是函数
* 返回值:
*   返回一个新的数组
* 是否改变原数组:
*   改变原数组
*
* */

let arr = [1,2,30,23,5,60,7];

arr.sort(function(a,b){
    return a-b
});
console.log(arr)


// 用sort排序数组对象

var arrObj = [
    {name:'zopp',age:0},
    {name:'gpp',age:18},
    {name:'yjj',age:8}
];

arrObj.sort(function(a,b){
    return a.age - b.age
})
console.log(arrObj)