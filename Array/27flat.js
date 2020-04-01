/*
* flat()方法, 扁平化数组
* 语法
*   var newArray = arr.flat([depth]);
* 参数:
*   depth: 递归的深度(1对应的是扁平二维数组,依次++)
* 返回值:
*   返回新的数组
* 是否改变原数组:
*   不改变原数组
* */
let arr = [1,2,[3,4,[5,6]]];
console.log(arr.flat(0));
console.log(arr.flat(1));   // 扁平化二维数组
console.log(arr.flat(2));   // 扁平化三维数组
console.log(arr.flat(3));   // 扁平化四维数组
console.log(arr.flat(4));

console.log(arr)