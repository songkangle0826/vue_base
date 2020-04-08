"use strict";
/*
* 泛型(Generics) 是指在定义函数,接口或者类的时候,不预先执行具体的类型,而在使用的时候在指定类型的一种特性
* 泛型T作用域只限于函数内部使用
* */
// 泛型函数
// 为什么会有泛型,他的意义在哪里
var a;
(function (a_1) {
    /*  使用any
        function createArray(length:number,val:any):Array<any>{
            let result: Array<any> = [];
            for(let i = 0;i<length;i++){
                result[i] = val
            }
            return result;
        }
    */
    // 使用泛型
    // 定义函数 类 接口
    function createArray(length, val) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = val;
            // result[i] = 1   //  Type '1' is not assignable to type 'T'.'1' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint '{}'.
        }
        return result;
    }
    var result1 = createArray(3, 'x');
    var result2 = createArray(3, 1); // 就相当于是一个参数
    // 类数组 ArrayLike arguments
    function sum() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        var args = arguments;
        for (var i = 0; i < args.length; i++) {
            console.log(args[i]);
        }
    }
    sum(1, 2, 3, 4, 5);
    // 类数组
    // let root:HTMLElement | null = document.getElementById('root');
    var myArray = /** @class */ (function () {
        function myArray() {
            this.list = [];
        }
        myArray.prototype.add = function (val) {
            this.list.push(val);
        };
        myArray.prototype.getMax = function () {
            var result = this.list[0];
            // 取一个数组中的最大值
            for (var i = 1; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        };
        return myArray;
    }());
    var arr = new myArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(10);
    var result3 = arr.getMax();
    console.log(result3);
    var add = function (a, b) {
        // return a + b;   // 定义的时候不知道
        return a;
    };
    var result5 = add(1, 2);
    console.log(result5); // 3
    // 多个类型参数   如何在不增加中间变量的情况下,交换两个变量的值
    function swap(tuple) {
        return [tuple[1], tuple[0]];
    }
    var result6 = swap(['xx', 2]);
    console.log(result6);
    // 默认泛型类型
    function createArray2(length, val) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = val;
            // result[i] = 1   //  Type '1' is not assignable to type 'T'.'1' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint '{}'.
        }
        return result;
    }
    var result8 = createArray2(1, '2');
    function loogger(val) {
        console.log(val.length); //Property 'length' does not exist on type 'T'.
    }
    loogger('哈哈哈');
    var cart = {
        list: ['1', '2']
    };
    var c1 = { list: ['1'] };
    var c2 = ['1'];
    // interface 定义一个试试在这的接口,他是一个真正的类型
    // type 一般用来定义别名,并不是一真正的类型
    /*
    * interface和type的区别
    * 接口创建了一个新的名字,它可以在其他任意地方被调用.而类型别名并不创建新的名字,例如报错信息就不会使用别名
    * 类型别名不能被extends和implements,这个时候我们应该尽量使用接口代替类型别名
    * 当我们需要使用联合类型绘制元素类型的时候,类型别名会更适合
    * */
})(a || (a = {}));
