/*
* 结构类型系统
* */

//
/*
* 1. 接口的兼容性
* 如果传入的变量和声明的类型不匹配,ts就会进行兼容性检查
* 原理是Duck-check,就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的
* */


// 接口的兼容性  ts跟类型没有关系,只跟属性有关系(只比较属性)
interface Animal{
    name: string;
    age: number;
}


interface Calculate{
    <T>(a:T,b:T): T   // 本质用于描述函数
}
interface Person{
    name: string;
    age: number;
    speak:(words:string)=>void;     // 描述对象的
}

function getName(animal: Animal): string{
    return animal.name
}

let p:Person  = {
    name: '哈哈哈',
    age: 10,
    // gender: 0,
    speak(){}
}


console.log(getName(p));


// 基本类型的兼容性 (把具体的值赋值给宽泛的值)
let num:string|number = 1;
let str: string = 'hello';
num = str;
num = 2;
// str = num;          //  Type 'number' is not assignable to type 'string'.



let num2: {
    toString(): string;
}

let str2: string = '架构';
num2 = str2
num2 = {
    toString(){ return 'x' }
}



// 类的兼容性
namespace b {
    // 类的兼容性跟类型无关,只跟属性有关
    class Animal{
        name: string;
    }
    class Bird extends Animal{
        // swing: number
    }
    let a:Animal;
    a = new Bird(); // 父类的变量能指向子类的实例


    let b: Bird;
    // b = new Animal();    // 子类的变量不能指向父类的实例
    b = {name:'哈哈哈'};      // 不管这个对象的具体类型,只要属性有就可以
}




namespace c {
    // 函数的兼容性
    // 比较参数
    type sumFunction = (a:number,b:number) => number;
    let sum: sumFunction
    function f1(a:number,b:number): number{
        return a;
    }
    sum = f1;
    function f2(a:number): number{
        return a;
    }
    sum = f2
    function f3(): number{
        return 1;
    }
    sum = f3

    function f4(a:number,b:number,c:number): number{
        return a;
    }
    // sum = f4;       // 参数可以少,但是不能多  Type '(a: number, b: number, c: number) => number' is not assignable to type 'sumFunction'.


    // 比较返回值
    type GetPerson = () => {name:string,age:number};
    let getPerson:GetPerson;
    function g1(){
        return { name:'string1',age: 10 }
    }
    getPerson = g1;

    function g2(){
        return { name:'string1' }
    }
    // getPerson = g2;      // 少了不行
    function g3(){
        return { name:'string1',age:10,home:'beijing'}
    }
    getPerson = g3;         // 多了可以


    interface T{
        name: string
    }   // 直接赋值不考虑兼容性的
    // let t:T = {name:'zhufeng',age:10}   // Type '{ name: string; age: number; }' is not assignable to type 'T'.



    // 函数参数的协变
    type logFunc = (a:number|string)=>void;
    let log: logFunc;
    function log1(a:number|string|boolean){
        console.log(a);
    }
    log = log1;         // 你要的我能做到就行
    function log2(a:number){
        console.log(a);
    }
    // log = log2;         //你要的我做不到不行
}


// 泛型的兼容性
namespace d{

    // 判断兼容性的的时候先判断具体的类型,在判断兼容性判断
    interface Empty<T>{
        data: T
    }
    let x:Empty<string>;    // { data:string }
    let y:Empty<number>;    // {data:number}
    // x = y;      // Type 'number' is not assignable to type 'string'.
    console.log(x,y)

    // x = '123';
    console.log(x,y)
    y = {
       data: 123
    }
    console.log(x,y)

    interface NotEmpty<T>{

    }

}


// 枚举的兼容
namespace e{
    enum Colors{
        Red, Yellow
    }
    let c: Colors;
    c = Colors.Red;
    c = 1;

    let d : number;
    d = Colors.Yellow;  // 枚举与数字互相兼容


}

