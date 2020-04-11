"use strict";
/*
* 结构类型系统
* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(animal) {
    return animal.name;
}
var p = {
    name: '哈哈哈',
    age: 10,
    // gender: 0,
    speak: function () { }
};
console.log(getName(p));
// 基本类型的兼容性 (把具体的值赋值给宽泛的值)
var num = 1;
var str = 'hello';
num = str;
num = 2;
// str = num;          //  Type 'number' is not assignable to type 'string'.
var num2;
var str2 = '架构';
num2 = str2;
num2 = {
    toString: function () { return 'x'; }
};
// 类的兼容性
var b;
(function (b_1) {
    // 类的兼容性跟类型无关,只跟属性有关
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bird;
    }(Animal));
    var a;
    a = new Bird(); // 父类的变量能指向子类的实例
    var b;
    // b = new Animal();    // 子类的变量不能指向父类的实例
    b = { name: '哈哈哈' }; // 不管这个对象的具体类型,只要属性有就可以
})(b || (b = {}));
var c;
(function (c_1) {
    var sum;
    function f1(a, b) {
        return a;
    }
    sum = f1;
    function f2(a) {
        return a;
    }
    sum = f2;
    function f3() {
        return 1;
    }
    sum = f3;
    function f4(a, b, c) {
        return a;
    }
    var getPerson;
    function g1() {
        return { name: 'string1', age: 10 };
    }
    getPerson = g1;
    function g2() {
        return { name: 'string1' };
    }
    // getPerson = g2;      // 少了不行
    function g3() {
        return { name: 'string1', age: 10, home: 'beijing' };
    }
    getPerson = g3; // 多了可以
    var log;
    function log1(a) {
        console.log(a);
    }
    log = log1; // 你要的我能做到就行
    function log2(a) {
        console.log(a);
    }
    // log = log2;         //你要的我做不到不行
})(c || (c = {}));
// 泛型的兼容性
var d;
(function (d) {
    var x; // { data:string }
    var y; // {data:number}
    // x = y;      // Type 'number' is not assignable to type 'string'.
    console.log(x, y);
    // x = '123';
    console.log(x, y);
    y = {
        data: 123
    };
    console.log(x, y);
})(d || (d = {}));
// 枚举的兼容
var e;
(function (e) {
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = Colors.Red;
    c = 1;
    var d;
    d = Colors.Yellow; // 枚举与数字互相兼容
})(e || (e = {}));
