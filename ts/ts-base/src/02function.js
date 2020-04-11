"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 函数定义
function hello(name) {
    console.log('hello' + name);
}
hello("加");
// 函数表达式
var getUserName = function (firstName, lastName) {
    return firstName + lastName;
};
// 可选参数 ? age?:number
function print(name, age, home) {
    console.log('name:' + name);
}
// print()          //不传可以
print('哈哈哈');
print('哈哈哈', 10);
print('哈哈哈', 10, '杭州');
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/user');
ajax('/user', 'POST');
// 剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accu, item) { return accu + item; }, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6));
// 函数的重载
// No overload expects 1 argument
var obj = {};
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
attr('哈哈哈');
attr(10);
function sum2(a, b) {
    return a + b;
}
console.log(sum2('哈哈', '123'));
