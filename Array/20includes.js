/*
* includes() 方法用来判断一个数组中是否包含某个指定的值,若包含,返回true,否则返回false
* 语法:
*   arrayobj.includes(valueToFind[, fromIndex])
* 参数:
*   valueToFind: 要查找的值
*   fromIndex: 从哪里开始查找,如果 fromIndex 大于等于数组的长度，则会返回 false，且该数组不会被搜索。
* 返回值:
*   true或者false
* 是否改变原数组:
*   不改变
* */

let arr = [1,2,3,4,5,6,3];

console.log(arr.includes(1)); // true

console.log(arr.includes(3,5)); // true

console.log(arr.includes(3,10)); // false

console.log(arr.includes(3,-10)); // true

console.log(arr)    // [1,2,3,4,5,6,3]