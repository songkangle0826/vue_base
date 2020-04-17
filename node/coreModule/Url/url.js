/*
* node内置模块 url
* */
var url = require('url');

/*
* url.parse(urlString[,parseQueryString,slashesDEnoteHost])
* 返回值:  解析url，返回一个url属性对象
* 参数:
*   urlStr: 要解析的url地址
*   queryString: 解析出来的query是字符串还是查询对象，true是对象 false是字符串
*   AnalysisHost: 是否要解析出来主机名
*
* */
let obj = url.parse('http://www.baidu.com:8080/vdsa?ie=utf-8&word=sad#id',false,true)
console.log(obj)
/*
    Url {
        protocol: 'http:',              //
        slashes: true,
        auth: null,
        host: 'www.baidu.com',
        port: '8080',
        hostname: 'www.baidu.com',
        hash: '#id',
        search: '?ie=utf-8&word=sad',
        // 解析出来的query是字符串还是查询对象，true是对象 false是字符串
        query: 'ie=utf-8&word=sad',
        pathname: '/vdsa',
        path: '/vdsa?ie=utf-8&word=sad',
        href: 'http://www.baidu.com/vdsa?ie=utf-8&word=sad'
    }
     protocol: // url的通信协议（http/https）
     slashes:  // 如果协议protocol冒号后跟的是两个斜杠字符（/）,那么值为true
     auth:     // URL的用户名与密码部分
     host:     // url的主机名 “baidu.com”
     port:     // 端口号
     hostname: // hostname是host属性排除端口port之后的小写的主机名部分
     hash:     // 哈希#后面字符串包括#
     search:   // URL的查询字符串部分，包括开头的问号字符（？）
     query:    // 不包含问号（？）的search字符串
     pathname: // URL的整个路径部分。跟在host后面，截止问号（？）或者哈希字符（#）分隔
     path:     // 由pathname与search组成的串接,不包含hash字符后面的东西
     href:     // 解析后的完整的URL字符串，protocol和host都会被转换成小写
    
*/




/*
* url.format(urlObject)
* 返回值:  将一个url对象格式化成url字符串
* 参数:
*   urlObject: 一个对象
* */
let urlObj = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: '8080',
    hostname: 'www.baidu.com',
    hash: '#id',
    search: '?ie=utf-8&word=sad',
    query: 'ie=utf-8&word=sad',         // 解析出来的query是字符串还是查询对象，true是对象 false是字符串
    pathname: '/vdsa',
    path: '/vdsa?ie=utf-8&word=sad',
    href: 'http://www.baidu.com/vdsa?ie=utf-8&word=sad'
}
console.log(url.format(urlObj))     // http://www.baidu.com/vdsa?ie=utf-8&word=sad#id


/*
* url.resolve(from,to)
* 返回值: 用来插入或替换URL内容
* 参数:
*   from: 源地址
*   to: 需要添加或替换的标签
* */
console.log(url.resolve("/one/two/three","four"));              // /one/two/four
console.log(url.resolve("/one/two/","four"));                   // /one/two/four
console.log(url.resolve("http://www.baidu.com","/topic"));      // http://www.baidu.com/topic
console.log(url.resolve("http://www.baidu.com/one","topic"));   // http://www.baidu.com/topic