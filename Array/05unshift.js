/*
* unshift() 方法向数组的开头添加一个或更多哥元素,并返回新的长度
* 语法:
*   objarray.unshift(item1,item2,item3....item3);
* 参数:
*   增加的心愿树
* 返回值:
*   新的长度
* 是否改变原数组
*   改变原数组
* */


let arr = [1,2,3,4,5,6];
arr.unshift(7,8,9,10)       // 10
console.log(arr);           // [1,2,3,4,5,6,7,8,9,10]