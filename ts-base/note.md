## typescript是什么?
- typescript是由微软开发的一款开源的编程语言
- Typescript是Javascript的超级,遵循最新的ES5/ES6规范.TypeScript扩展了Javascript语法
- TypeScript更像后端Java、C#这样的面向对象语言可以让js开发大型企业应用
- 越来越多的项目是基于Ts的,比如VSCode、Angular16、Vue3、React16
- Ts提供的类型系统可以帮助我们在写代码的时候提供更丰富分语法提示
- 在创建前的编译阶段经过类型系统的检查,就可以避免很多线上的错误

## typescript
- 安装: npm install typescript -g
- 查看安装的版本: tsc --version
- 创建tsconfig.json文件: tsc --init



## 模块化
- AMD CMD require.js sea.js(基本上不用了)
- node commonjs commonjs2
- es6 module
- umd 兼容以上三种

 
Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'
```javascript
/*
commonJs 导出
moduleA.js  commonJs模块
exports.a = 'a';
exports.b = 'b';
module.exports = 'mod'

commonJs 导入
commonB.js
模块引用(require)  
var moduleA = require('./moduleA')
*/

// import moduleA,{a,b} form './moduleA'  // es6的模块


/*
es6导出
function v1(){}
var v2 = 'v2'
export {
    v1
    v2
}

es6导入
import {v1,v2} form './moduleA'

export命令用于规定模块的对外接口。
export default命令，为模块指定默认输出。

*/
// export和export default的区别
// https://www.cnblogs.com/fanyanzhao/p/10298543.html

/*
* es6Module 与 CommonJS 的理解
* https://segmentfault.com/a/1190000017878394
* */ 

```
