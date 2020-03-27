/*
* concat() 方法用于连接两个或多个数组
* 语法:
*   objArray.concat(array1,array2,...,arrayX);
* 参数:
*   要连接的数组
* 返回值:
*   返回连接后新的数组
* 是否改变原数组:
*   不改变原数组
* */


let arr = [1,2,3];

console.log(arr.concat([4,5],[6,7]))
console.log(arr);