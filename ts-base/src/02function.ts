/*
* 函数的定义
* 可以指定参数的类型和返回值类型
* */

// 函数定义
function hello(name:string):void{
    console.log('hello'+name)
}

hello()


// type用来定义一个类型或者 类型别名  => 分割符  分割参数和返回值的
type GetUserNameType = (firstName:string,lastName:string) => string
// 函数表达式
let getUserName: GetUserNameType = function(firstName:string,lastName:string):string{
    return firstName + lastName
}


// 可选参数 ? age?:number
function print(name:string,age?:number,home?:string){

}
print()             //不传可以
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
    return numbers.reducer((accu,item)=>accu+item,0)
}


// 函数的重载
