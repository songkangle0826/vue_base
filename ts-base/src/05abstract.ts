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

export {}
namespace a{
    abstract class Animals{
        // string: name;   // 错误写法
        name: string;   // 先写属性,在写类型
        abstract getName(): string;
    }
    // let a = new Animals()  //  Cannot create an instance of an abstract class. 抽象类描述一种抽象的概念,无法被实例化,只能被继承


    class Cat extends Animals{
        getName(): string {
            return this.name;
        }
    }
    let cat = new Cat();
    cat.name = "猫"
    console.log(cat.getName());


    class Dog extends Animals{
        getName(): string {
            return this.name;
        }
    }
    let dog = new Dog();
    cat.name = "狗"
    console.log(cat.getName());
}



//
/*
* 重写(override) vs 重载(overload)
* 重写指子类重写继承自父类中的方法
* 重载是值为同一个函数提供多个类型定义(参数的数量,类型不一定)
* */
namespace b{
    // 重写 子类重新实现并覆盖父类中的方法
    class Animal{
        name:string = "哈";
        constructor(){}
        static speak(){     // 子类无法继承父类的静态方法

        }
        speak(){
            // throw new Error('此方法不能被调用');    // 并没有干掉父类的方法
            console.log("动物叫")
        }
    }
    class Cat extends Animal{
        constructor(name:string){
            super()
            console.log(Animal.prototype)
            console.log(this.name)
            this.name = name
        }
        speak(){
            console.log("我们一起喵喵磨啊")
            // 可以调父类的方法 super是父类的实例
            super.speak()   //   super几乎可以等于Animal.prototype
        }
    }
    let cat = new Cat("猫")
    cat.speak();
    console.log(cat.name)

    class Dog extends Animal{
        speak(){
            console.log("我们一起汪汪汪")
            // 可以调父类的方法
            super.speak()
        }
    }
    let dog = new Dog()
    dog.speak();
}


/*
* 继承: 子类继承父类,子类除了拥有父类的所有特性,还有一些更具体的特性
* 多态: 由继承而产生了相关的不同的类,对同一个方法可以有不同的行为
* */








/*
* 接口
* 理解:
*   1. 接口一方面可以在面向对象编程中表示(行为的抽象),另外可以用来描述(对象的形状)
*   2. 接口就是把一些类中共有的属性和方法抽象出来,可以用来约束实现此接口的类
*   3. 一个类可以继承另一个类并实现多个接口
*   4. 接口像插件一样是用来增强类的,而抽象类是具体类的抽象概念
*   5. 一个类可以实现多个接口,一个接口也可以被多个类实现,但一个类的可以有个多个子类,但是只能有一个父类
* 语法:
*   interface中可以用分号或者逗号分割每一项,也可以什么都不加
* */

// 1. 用来描述对象的形状,指定是对象有哪些属性,属性是什么类型
interface Point{
    x: number,
    y: number;
    z: number   // 可以用分号或者逗号分割每一项,也可以什么都不加
}
// 修饰对象的形状
let ponit: Point = {x:0,y:0,z:0};

// 2. 还可以用来描述行为的抽象
interface Speakable{
    speak(): void;  // 因为接口里不能放实现,只能放定于,所有的方法都是抽象的
}
interface Eatable{
    eat(): void;
}
// 类可以实现多个接口,但只能继承一个父类
class Person implements Speakable,Speakable{
    speak(): void{
        console.log("我会说话")
    }
    eat():void{
        console.log("我能吃")
    }
}
let p = new Person()
p.eat()
p.speak()



// 任意属性
interface plainObject{
    // x: number,
    // y: number
    // 任意属性
    [propName: string]: number
}
let obj: plainObject = {
    x: 1,
    y: 2,
    z: 3,
    d: 4
}


// 接口的继承
interface Speakable{
    speak(): void;
}
interface SpeakChinese extends Speakable{
    SpeakChinese():void
}
class Per implements SpeakChinese{
    speak(){
        console.log(111)
    }
    SpeakChinese(){

    }
}
let p1 = new Per();
p1.speak();


// 接口的readonly
interface Circle{
    readonly PI: number,
    radius: number,
}

let circle: Circle = { PI: 3.14, radius: 10 }
// circle.PI = 3.15;  // Cannot assign to 'PI' because it is a read-only property.



// 接口还可以用来约束函数
interface Discount{
    (price:number): number
}
let cost:Discount = function(price:number):number{
    return price * 0.8;
}


// 可索引接口
// 是用来对数组和对象进行约束
interface UserInterface{
    // 约束一个对象, key是数字,值是一个字符串
    [index: number]: string
}

let arr: UserInterface = ['1','2']
let objinter: UserInterface = {
    0: '0',
    1: '1'
}




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
class Animal{
    name: string;
    constructor(name:string){
        this.name = name || "啊哈哈";
    }
    static speak(){}
    speak():void{
        console.log("动物叫")
    }
    eat():void{
        console.log("吃")
    }
}
// Animal.prototype.x = 123;
class Cat extends Animal{
    constructor(name:string){
        super(name);    // 这里传递name,相当于传递到父类的constructor中    // 相当于父类的原型  Animal.prototype
        // this.name = name;
        // console.log(super.x); // 可以访问
    }
    speak():void{
        super.speak()
    }
}

let cat = new Cat("猫")

// Object.setPrototypeOf  通过Object.setPrototypeOf  把 Cat.prototype.__proto__原型指向new Animal
// console.log(Cat.prototype.__proto__,new Animal());  // Animal



// 类接口 == 可以用接口来装饰类  学TS核心 要学会两个重要 接口+泛型

namespace d{
    // 用接口来约束类
    interface SpeakAble{
        name: string;
        speak(words: string): void;
    }
    class Dog implements SpeakAble{
        name: string;
        speak(words:string){

        }
    }


    //  使用new来约束,构造函数
    class Animal{
        // 构造函数
        constructor(public name:string){

        }
    }
    // 约束构造函数类型   使用new来约束
    interface withNameClass{
        // new值的是类中的constructor
        new(name:string): Animal;
    }
    function createAnimal(clazz:withNameClass,name:string ){
        return new clazz(name)
    }
    let a = createAnimal(Animal,'哈哈哈');
}
