/*
* node核心模块 -- QueryString  模块提供用于解析和格式化 URL 查询字符串的实用工具
* */

const querystring = require('querystring')




/*
* querystring.parse(str[,sep[,eq[,options]]])    querystring.decode()是querystring.parse的别名
* 作用: querystring.parse() 方法将 URL 查询字符串 str 解析为键值对的集合。
* 参数:
*   str:<string>    要解析的 URL 查询字符串。
*   sep:<string>    用于在查询字符串中分隔键值对的子字符串。默认值: '&'
*   eq:<string>     用于在查询字符串中分隔键和值的子字符串。默认值: '='
*   options: <object>
*       decodeURIComponent <Function> 当解码查询字符串中的百分比编码字符时使用的函数。默认值: querystring.unescape()
*       maxKeys <number> 指定要解析的键的最大数量。指定 0 可移除键的计数限制。默认值: 1000。
*
* */


let str = 'foo=bar&abc=xyz&abc=123';
console.log(querystring.parse(str))


/*
 * querystring.stringify(obj[,sep[,eq[,options]]])  querystring.encode()是querystring.stringify的别名
 * */




/*
 * querystring.escape(一丝kp)(str)
 * 作用: escape可使传入的字符串进行编码
 * */

console.log(querystring.escape('name="哈哈"'));       //name%3D%22%E5%93%88%E5%93%88%22


/*
 * querystring.unescape(str)
 * 作用: unescape方法可将含有%的字符串进行解码
 * */

console.log(querystring.unescape('name%3D%22%E5%93%88%E5%93%88%22'));   //name="哈哈"
