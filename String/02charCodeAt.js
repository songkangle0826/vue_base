/*
* charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元
* 语法:
*   str.charCodeAt(index)
* 参数:
*   index: 一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。
* 返回值:
*   给定索引处的UTF-16代码单元,如果索引超出字符串的长度,返回值为NaN
* */

let str = '12345他GV重新sfc';

console.log(str.charCodeAt());      // 49

console.log(str.charCodeAt('哈哈')); // 49

console.log(str.charCodeAt(3));     // 52

console.log(str.charCodeAt(99));    // NaN