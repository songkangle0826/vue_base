/*
* charAt()方法 从一个字符串中返回指定的字符
* 语法:
*   string.charAt(index)
* 参数:
*   index: 一个介于0到字符串长度-1之间的整数.(0~str.length-1)
* 返回值:
*   返回一个指定的索引对应的字符
* */

let str = '123asdf';
console.log(str.charAt());      // 1
console.log(str.charAt(6));     // f
console.log(str.charAt(100));   // ''
