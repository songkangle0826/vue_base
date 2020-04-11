"use strict";
/*
* 抽象类 abstract
* 特点
*   1. 抽象类描述一种抽象的概念,无法被实例化,只能被继承,可以被对个子类继承
*   2. 无法创建抽象类的实例
*   3. 抽象方法不能在抽象类中实现,只能再抽象类的具体子类中实现,而且必须实现
* 访问控制修饰符  priviate protected public
*   只读属性    readonly
*   静态属性    static
*   抽象类,抽象方法 abstract
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
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a) {
    var Animals = /** @class */ (function () {
        function Animals() {
        }
        return Animals;
    }());
    // let a = new Animals()  //  Cannot create an instance of an abstract class. 抽象类描述一种抽象的概念,无法被实例化,只能被继承
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.getName = function () {
            return this.name;
        };
        return Cat;
    }(Animals));
    var cat = new Cat();
    cat.name = "猫";
    console.log(cat.getName());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.getName = function () {
            return this.name;
        };
        return Dog;
    }(Animals));
    var dog = new Dog();
    cat.name = "狗";
    console.log(cat.getName());
})(a || (a = {}));
//
/*
* 重写(override) vs 重载(overload)
* 重写指子类重写继承自父类中的方法
* 重载是值为同一个函数提供多个类型定义(参数的数量,类型不一定)
* */
var b;
(function (b) {
    // 重写 子类重新实现并覆盖父类中的方法
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = "哈";
        }
        Animal.speak = function () {
        };
        Animal.prototype.speak = function () {
            // throw new Error('此方法不能被调用');    // 并没有干掉父类的方法
            console.log("动物叫");
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            var _this = _super.call(this) || this;
            console.log(Animal.prototype);
            console.log(_this.name);
            _this.name = name;
            return _this;
        }
        Cat.prototype.speak = function () {
            console.log("我们一起喵喵磨啊");
            // 可以调父类的方法 super是父类的实例
            _super.prototype.speak.call(this); //   super几乎可以等于Animal.prototype
        };
        return Cat;
    }(Animal));
    var cat = new Cat("猫");
    cat.speak();
    console.log(cat.name);
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.speak = function () {
            console.log("我们一起汪汪汪");
            // 可以调父类的方法
            _super.prototype.speak.call(this);
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.speak();
})(b || (b = {}));
// 修饰对象的形状
var ponit = { x: 0, y: 0, z: 0 };
// 类可以实现多个接口,但只能继承一个父类
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        console.log("我会说话");
    };
    Person.prototype.eat = function () {
        console.log("我能吃");
    };
    return Person;
}());
var p = new Person();
p.eat();
p.speak();
var obj = {
    x: 1,
    y: 2,
    z: 3,
    d: 4
};
var Per = /** @class */ (function () {
    function Per() {
    }
    Per.prototype.speak = function () {
        console.log(111);
    };
    Per.prototype.SpeakChinese = function () {
    };
    return Per;
}());
var p1 = new Per();
p1.speak();
var circle = { PI: 3.14, radius: 10 };
var cost = function (price) {
    return price * 0.8;
};
var arr = ['1', '2'];
var objinter = {
    0: '0',
    1: '1'
};
/*
* 抽象类(abstract)和接口(interface)的区别?
*
*   1. 不同类之间公有的属性或者方法,可以抽象成一个接口(interfaces)
*   2. 而抽象类是供其他类继承的基类,抽象类不允许被实例化.抽象类中的抽象方法必须在子类中被实现
*   3. 抽象类本质是一个无法被实例化的类,其中能够实现方法和初始化属性,而接口仅能够用于描述,既不能提供方法的实现,也不为实现进行初始化
*   4. 一个类可以继承一个类或者抽象类,但可以实现(implements)多个接口
*   5. 抽象类也可以实现接口
* */
// 理解es6中class中的继承原理
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name || "啊哈哈";
    }
    Animal.speak = function () { };
    Animal.prototype.speak = function () {
        console.log("动物叫");
    };
    Animal.prototype.eat = function () {
        console.log("吃");
    };
    return Animal;
}());
// Animal.prototype.x = 123;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
        // this.name = name;
        // console.log(super.x); // 可以访问
    }
    Cat.prototype.speak = function () {
        _super.prototype.speak.call(this);
    };
    return Cat;
}(Animal));
var cat = new Cat("猫");
// Object.setPrototypeOf  通过Object.setPrototypeOf  把 Cat.prototype.__proto__原型指向new Animal
// console.log(Cat.prototype.__proto__,new Animal());  // Animal
// 类接口 == 可以用接口来装饰类  学TS核心 要学会两个重要 接口+泛型
var d;
(function (d) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function (words) {
        };
        return Dog;
    }());
    //  使用new来约束,构造函数
    var Animal = /** @class */ (function () {
        // 构造函数
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    function createAnimal(clazz, name) {
        return new clazz(name);
    }
    var a = createAnimal(Animal, '哈哈哈');
})(d || (d = {}));
