/*
* 函数的定义
* 可以指定参数的类型和返回值类型
* */
export {}
// 函数定义
function hello(name:string):void{
    console.log('hello'+name)
}

hello("加")


// type用来定义一个类型或者 类型别名  => 分割符  分割参数和返回值的
type GetUserNameType = (firstName:string,lastName:string) => string
// 函数表达式
let getUserName: GetUserNameType = function(firstName:string,lastName:string):string{
    return firstName + lastName
}


// 可选参数 ? age?:number
function print(name:string,age?:number,home?:string):void{
    console.log('name:'+name)
}
// print()          //不传可以
print('哈哈哈')
print('哈哈哈',10)
print('哈哈哈',10,'杭州')



// 默认参数
function ajax(url:string,method:string = 'GET'){
    console.log(url,method);
}
ajax('/user');
ajax('/user','POST');


// 剩余参数
function sum(...numbers:Array<number>){
    return numbers.reduce((accu,item)=>accu+item,0)
}

console.log(sum(1,2,3,4,5,6))


// 函数的重载
// No overload expects 1 argument

let obj: any = {};

// 重载的定义和函数仅仅的挨着
function attr(val:string):void
function attr(val:number):void
function attr(val:any): void{
    if(typeof val === 'string'){
        obj.name = val
    }else if (typeof val === 'number'){
        obj.age = val
    }
}
attr('哈哈哈')
attr(10)
// 传这些没有意义
// attr(true)
// attr(Symbol(1))
// attr(obj);

function sum2(a:number,b:number):string|number;
function sum2(a:string,b:string):string|number;
function sum2(a:any,b:any):string|number{
    return a + b
}

console.log(sum2('哈哈','123'))
