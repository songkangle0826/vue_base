"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'hahaha'; // 字符串
var age = 20; // 数字
var married = false; // 布尔
var hobbies = ['1', '2', '2'];
var interies = ['1', '2', '4'];
// 元组( Tuple ) == 类似于数组(长度和类型都固定的数组)
var point = [100, 100];
var person = ['哈哈', 10];
/*
* 元组的特点:
 1.长度固定
 2.类型可以不一样
 3.用于表示一个固定的结构
* */
// 枚举 enum
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 0] = "Boy";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log("\u54C8\u54C8\u54C8\u662F\u4E00\u4E2A" + Gender.Boy);
console.log("\u54C8\u54C8\u54C8\u662F\u4E00\u4E2A" + Gender.GIRL);
/*
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 0] = "Boy";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));

枚举编译成一个对象了
var Gender = {
    0: 'Boy',
    1: 'GIRL',
    'Boy': 0,
    'GIRL': 1
}
* */
var Week;
(function (Week) {
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tus"] = 2] = "Tus";
})(Week || (Week = {}));
// 数字,字符串,他的值可能会写错
var person2 = {
    gener: Gender.Boy
};
console.log(0 /* Red */, 1 /* Yellows */, 2 /* Blue */);
// 任意类型 anyscript
// 第三方库没有类型定义  类型转换的时候, 数据结构太复杂太灵活 any
// let root: HTMLElement | null = document.getElementById('root');
// ts为DOM提供了一整套类型声明
// (!) 强行告诉你我不会为null
// root!.style.color = 'red'; // ! 断言不为空
// null undefined
// null      空
// undefined 未定义
// 他们都是其他类型的子类型,你可以把它们赋给其他类型的变量
var myname1 = null;
var myname2 = undefined;
var x;
x = 1;
x = undefined;
x = null;
// void类型 空的 没有
function greeting(name) {
    console.log("hello " + name);
    // return null | undefined 这个是可以的
}
greeting('哈哈哈');
// never 永远不
// never 是其他类型子类型,代表不会出现的值
// 第一种类型:  在函数内部永远会抛出错误,导致函数无法正常结束
// A function returning 'never' cannot hava a reachable end point == 返回never的函数必须存在无法达到的终点
function createError(message) {
    console.log(1);
    throw new Error('error');
    // console.log(2)
}
// 第二种类型: 出现死循环
function sum() {
    while (true) {
        console.log('hello');
    }
    // 永远不会走到这里
    // console.log('end point')
}
// 推论 猜
var name2 = 2;
name2 = 3;
name2 = 4;
var name3;
name3 = 4;
name3 = '4';
// 包装对象  java装箱和拆箱 c#
// 自动在基本类型和对象类型之间切换
// 1. 基本类型上没有方法
// 2. 在内部迅速的完成一个装箱的操作, 把基本类型迅速包装成对象类型,然后用对象来调用方法
/*
    let name55 = new String();
    name55.toLocaleLowerCase();
*/
var name4 = 'a哈哈哈1';
console.log(name4.toLocaleLowerCase());
var isOk1 = true;
var isOk2 = Boolean(1);
// let isOk3:boolean = new Boolean(1); //
// 联合类型
var name6;
name6 = '哈啊哈';
console.log(name6.length);
name6 = 6;
name6.toFixed(2);
var name7;
// 断言成一个字符串
name7.toLocaleLowerCase();
// (name7 as number).toFixed(2);
// 字面量类型 多个值组合
var Gender3;
Gender3 = 'Boy';
Gender3 = 'Girl';
// Gender3 = '11';  这个是错误的 
