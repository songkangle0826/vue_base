"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a) {
    function enhancer(target) {
        // target 相当于Person类
        target.xx = 'xx'; // 类是的属性
        target.prototype.xx = 'xx';
        target.prototype.yy = 'yy';
    }
    // 类的装饰器
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.xx);
    console.log(p.yy);
})(a || (a = {}));
// 把类整个替换掉
// namespace b {
//     interface Person{
//         age: number,
//     }
//     function enhancer(target:any){
//         return class child extends Person{
//             // public name: string = 'person';
//             public age: number = 10;  // 公共的方法
//         }
//     }
//     // 类的装饰器
//     @enhancer
//     class Person{
//         public name: string = 'string';
//         constructor(){}
//     }
//     let p = new Person()
//     console.log(p.age)
// }
// 工厂装饰器
// namespace c {
//     function enhancer(name:string):any{
//         return function enhancer(target:any):any{
//             return class extends target{
//                 // public name: string = name;
//                 public age: number = 10;  // 公共的方法
//                 constructor(name:string,age:number){
//                     super(name)
//                 }
//
//             }
//         }
//     }
//     // 类的装饰器
//     @enhancer('hahaha')
//     class Person{
//         public name: string = 'string';
//         constructor(){}
//     }
//     let p = new Person()
//     p.name
//     // p.age
// }
/*
* 属性装饰器
* 属性装饰器用来装饰类的成员属性。属性装饰器接收两个参数：
*   类的原型对象，如果是静态方法则为类的构造函数
*    属性名
* */
var d;
(function (d) {
    // target如果装饰的是个普通属性的话,name这个target指向类的原型  Person.prototype
    // target如果装饰的是一个类的属性static,name这个target指向类的定义
    function upperCase() {
        return function (target, propertyName) {
            var value = target[propertyName];
            var getter = function () { return value; };
            var setter = function (newValue) {
                console.log(newValue, 1234);
                value = newValue.toLocaleUpperCase();
                console.log(value);
            };
            delete target.propertyName;
            Object.defineProperty(target, propertyName, {
                set: setter,
                get: getter,
                enumerable: true,
                configurable: true,
            });
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhufeng';
        }
        // @noEnumerable
        Person.prototype.getName = function () {
            console.log('getName');
        };
        __decorate([
            upperCase('哈哈哈')
        ], Person.prototype, "name", void 0);
        return Person;
    }());
    var p = new Person();
    console.log(p);
    p.name = 'jiagou';
    console.log(p.name);
})(d || (d = {}));
