"use strict";
// 如何定义类
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
// 实例属性
// 类属性
// 命名空间内
var a;
(function (a) {
    var Person = /** @class */ (function () {
        function Person() {
            this.name = '哈哈哈';
            this.age = 10;
        }
        return Person;
    }());
    var p1 = new Person();
    console.log(p1.name, p1.age);
})(a || (a = {}));
var b;
(function (b) {
    // 读存取器 getter setter
    var Person = /** @class */ (function () {
        function Person(name) {
            this.myname = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.myname;
            },
            set: function (newVal) {
                this.myname = newVal;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p1 = new Person("哈哈哈");
    console.log(p1.name);
    p1.name = "哈哈哈skl";
    console.log(p1.name);
})(b || (b = {}));
var c;
(function (c) {
    // 读存取器 getter setter
    var Person = /** @class */ (function () {
        /*
            name:string;
            constructor(name:string) {
                this.name = name
            }
        */
        // 相当于上面代码;
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var p1 = new Person("哈哈哈");
    p1.name;
})(c || (c = {}));
// 继承  ts设计模式
/*
* 1.子类继承父类后,子类的实例上就拥有了父类中的属性和实例
*
* 2. 访问修饰符  public(公开的)  protected(受保护的)  private(私有的)
*       public 自己 自己的子类 和其它类都可以访问
*       protected 自己和自己的子类可以访问,其它的类不能访问
*       private 私有的 只能自己访问,自己的子类不能访问,其它更不行了
* */
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (newName) {
            this.name = newName;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, stuNo) {
            var _this = _super.call(this, name, age) || this;
            _this.stuNo = stuNo;
            return _this;
        }
        Student.prototype.getstuNo = function () {
            return this.name + this.stuNo; // + this.age + this.stuNo // + this.amount(私有的不能访问)
        };
        Student.prototype.setstuNo = function (newStuNo) {
            this.stuNo = newStuNo;
        };
        Student.getType = function () {
            return Student.type;
        };
        Student.type = 'Student'; // 静态属性(类的属性)  // 类的本身的属性和方法
        return Student;
    }(Person));
    var s = new Student("skl", 25, 1001010);
    console.log(s);
    // console.log(s.getstuNo(),12345);
    // console.log(s.setName("宋康乐"),12345);
    // s.age = 20      // 受保护的不能访问 Property 'age' is protected and only accessible within class 'Person' and its subclasses
    // console.log(s.getstuNo())
    // s.amount = 123  // 私有的不能访问 Property 'amount' is private and only accessible within class 'Person'.
    console.log(Student.type); // Student
    console.log(Student.getType()); // Student
})(d || (d = {}));
var Sex;
(function (Sex) {
    Sex[Sex["Boy"] = 0] = "Boy";
    Sex[Sex["girl"] = 1] = "girl";
})(Sex || (Sex = {}));
