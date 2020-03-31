"use strict";
// 如何定义类
// 实例属性
// 类属性
var Person = /** @class */ (function () {
    function Person() {
        this.name = '哈哈哈';
        this.age = 10;
    }
    return Person;
}());
var p1 = new Person();
console.log(p1.name, p1.age);
// 存取器 getter setter
