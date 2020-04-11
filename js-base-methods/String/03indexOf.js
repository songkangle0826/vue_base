/*
* indexOf() 方法返回调用它的String对象中第一次出现的指定值的索引,从fromIndex处进行搜索.如果未找到该值,则返回-1;
* 语法:
*   str.indexOf(searchValue[,fromIndex])
* 参数:
*   searchValue: 要查找的字符
*   fromIndex: 从何处进行搜索
* 返回值:
*   返回第一次字符出现的位置,如果没有找到,返回-1
* */


let str = '1234qwfx';

console.log(str.indexOf('1'));  // 0

console.log(str.indexOf('1',10));   //-1

console.log(str.indexOf('0',10));   //-1