/*
* includes()方法用于判断一个字符串是否包含在另一个字符串中,根据情况返回true或false
* 语法:
*   str.includes(searchString[,position]);
* 参数:
*   searchString: 要在此字符串中国搜索的字符串
*   position: 可选,从当前字符串的哪个位置开始搜寻子字符串,默认为0
* 返回值:
*   如果当前字符串包含被搜寻的字符串,就返回true;否则返回false
* */

let str = '123456wsfsdv';
let isExist = str.includes('12345');
console.log(isExist)        // true

let isExist1 = str.includes('12345',3);
console.log(isExist1)       // false