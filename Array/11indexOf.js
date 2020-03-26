/*
* indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引,如果不存在,则返回-1
* 语法:
*   arrayObj.indexOf(searchElement,fromIndex)
* 参数:
*   searchElement: 要查找的元素
*   fromIndex:开始查找的位置
* 返回值:
*   从左向右开始查找:找到有满足的第一个,返回第一个索引,如果没有,返回-1
* 是否改变数组:
*   不改变原来的数组
* */
let arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5];

console.log(arr.indexOf(1))     // 0
console.log(arr.indexOf(1,3))   // 10

console.log(arr.indexOf(10,3))   // -1