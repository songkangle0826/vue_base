// 如何定义类

// 实例属性
// 类属性

// 命名空间内
namespace a{
    class Person{
        name: string = '哈哈哈';
        age: number;
        constructor(){
            this.age = 10
        }
    }

    let p1 = new Person();
    console.log(p1.name,p1.age)
}

namespace b{
    // 读存取器 getter setter
    class Person{
        myname: string;
        age: number;
        constructor(name:string){
            this.myname = name
        }
        get name(){
            return this.myname
        }
        set name(newVal:string){
            this.myname = newVal
        }
    }

    let p1 = new Person("哈哈哈");
    console.log(p1.name)
    p1.name = "哈哈哈skl"
    console.log(p1.name)
}


namespace c{
    // 读存取器 getter setter
    class Person{
        /*
            name:string;
            constructor(name:string) {
                this.name = name
            }
        */
        // 相当于上面代码;
        constructor(public name:string) {

        }

        /*  只读 == 把一个变量弄成只读的
            constructor(public readonly name:string) {

            }
        */

    }
    let p1 = new Person("哈哈哈");
    p1.name
}


// 继承  ts设计模式
/*
* 1.子类继承父类后,子类的实例上就拥有了父类中的属性和实例
*
* 2. 访问修饰符  public(公开的)  protected(受保护的)  private(私有的)
*       public 自己 自己的子类 和其它类都可以访问
*       protected 自己和自己的子类可以访问,其它的类不能访问
*       private 私有的 只能自己访问,自己的子类不能访问,其它更不行了
* */
namespace d{
    class Person{
        public name:string;
        protected age:number;
        private amount:string;
        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }
        getName(){
            return this.name;
        }
        setName(newName: string){
            this.name = newName
        }
    }

    class Student extends Person{
        static type = 'Student';      // 静态属性(类的属性)  // 类的本身的属性和方法
        // private stuNo: number;        // 实例的属性(实例上的属性)
        stuNo: number;
        constructor(name:string,age:number,stuNo:number){
            super(name,age);        // this.name = name;    this.age = age;
            this.stuNo = stuNo
        }
        getstuNo(){     // 方法放到了原型上面
            return this.name + this.stuNo // + this.age + this.stuNo // + this.amount(私有的不能访问)
        }
        setstuNo(newStuNo:number){  // 方法放到了原型上面
            this.stuNo = newStuNo
        }
        static getType(){
            return Student.type
        }
    }

    Student.prototype.ajax = 1123
    console.log(Student.prototype,12345)


    let  s = new Student("skl",25,1001010)

    console.log(s);

    // console.log(s.getstuNo(),12345);
    // console.log(s.setName("宋康乐"),12345);

    // s.age = 20      // 受保护的不能访问 Property 'age' is protected and only accessible within class 'Person' and its subclasses
    // console.log(s.getstuNo())
    // s.amount = 123  // 私有的不能访问 Property 'amount' is private and only accessible within class 'Person'.


    console.log(Student.type)           // Student
    console.log(Student.getType())      // Student
}


class Stu{
    constructor(){
        this.name = 123
    }
    getName(){
        return this.name
    }
}
