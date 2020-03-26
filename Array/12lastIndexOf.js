/*
* lastIndexOf() 方法返回指定元素在数组中的最后一个的索引,如果不存在则返回-1.从数组的后面开始向前查找,从fromIndex开始
* 语法:
*   arrayObj.lastIndexOf('指定元素',fromIndex(从何处开始查找))
* 参数:
*   指定元素
*   fromIndex:  从何处开始查找
* 返回值:
*   有指定元素,返回对应的索引
*   没有指定元素,返回-1
* 是否改变数组:
*   不改变原来的数组
* */



let arr = [1,2,3,4,5,6,7,8,9,1,2,1,3];
console.log(arr.lastIndexOf(1));     // 11

console.log(arr.lastIndexOf(1,-2))   // 11

console.log(arr.lastIndexOf(1,-3))   // 9

console.log(arr.lastIndexOf(10))     // -1

