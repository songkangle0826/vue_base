/*
* toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
* 语法:
*   arr.toLocaleString([locales[,options]]);
* 参数:
*   locales 带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。
*   options 一个可配置属性的对象，对于数字 Number.prototype.toLocaleString()，对于日期Date.prototype.toLocaleString().
* */