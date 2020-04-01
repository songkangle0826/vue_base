export {}
namespace a {
    interface Person{
        xx: string,
        yy: string
    }
    function enhancer(target:any){
        // target 相当于Person类
        target.xx = 'xx';       // 类是的属性
        target.prototype.xx = 'xx';
        target.prototype.yy = 'yy';
    }
    // 类的装饰器
    @enhancer
    class Person{
        constructor(){}
    }
    
    let p = new Person()
    console.log(p.xx)
    console.log(p.yy)
}

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
namespace d{
    // target如果装饰的是个普通属性的话,name这个target指向类的原型  Person.prototype
    // target如果装饰的是一个类的属性static,name这个target指向类的定义
    function upperCase(){
        return function(target:any,propertyName:string){

            let value = target[propertyName];

            const getter = ()=> value;

            const setter = (newValue: string)=>{
                console.log(newValue,1234)
                value= newValue.toLocaleUpperCase()
                console.log(value)
            }
            delete target.propertyName
            Object.defineProperty(target,propertyName,{
                set: setter,
                get: getter,
                enumerable: true,
                configurable: true,
            })

        }
    }

    class Person{
        @upperCase('哈哈哈')
        name: string = 'zhufeng';
        // @noEnumerable
        getName(){
            console.log('getName')
        }
    }
    let  p = new Person();
    console.log(p)
    p.name = 'jiagou'
    console.log(p.name);
}