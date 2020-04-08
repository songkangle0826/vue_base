/*
 * lastIndexOf() 方法返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1
 * 语法:
 *  str.lastIndexOf(searchValue[, fromIndex])
 * 参数:
 *  searchValue: 要搜索的字符
 *  fromIndex: 从哪个位置开始
 * 返回值
 *  返回指定值最后一次出现的索引(该索引仍是以从左至右0开始记数的)，如果没找到则返回-1。
 * */


let str = '1234q1wfx0';

console.log(str.lastIndexOf('1'));  // 5

console.log(str.lastIndexOf('1',10));   //5

console.log(str.lastIndexOf('1',5));     // 5
console.log(str.lastIndexOf('1',4));    // 0


console.log(str.lastIndexOf('0',5));     // -1
console.log(str.lastIndexOf('0',10));     // 9