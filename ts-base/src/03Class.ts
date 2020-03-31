// 如何定义类

// 实例属性
// 类属性
class Person{
    name: string = '哈哈哈';
    age: number;
    constructor(){
        this.age = 10
    }
}

let p1 = new Person();
console.log(p1.name,p1.age)


// 存取器 getter setter