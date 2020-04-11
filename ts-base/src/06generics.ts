/*
* 泛型(Generics) 是指在定义函数,接口或者类的时候,不预先执行具体的类型,而在使用的时候在指定类型的一种特性
* 泛型T作用域只限于函数内部使用
* */

// 泛型函数

// 为什么会有泛型,他的意义在哪里
namespace a{
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
    function createArray<T>(length:number,val: T ):Array<T>{
        let result: Array<T> = [];
        for(let i = 0;i<length;i++){
            result[i] = val
            // result[i] = 1   //  Type '1' is not assignable to type 'T'.'1' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint '{}'.

        }
        return result;
    }
    let result1 = createArray<string>(3,'x');
    let result2 = createArray<number>(3,1); // 就相当于是一个参数




    // 类数组 ArrayLike arguments
    function sum(...args2:any[]){       // any的一个数组
        let args: IArguments = arguments;
        for(let i = 0;i<args.length;i++){
            console.log(args[i]);
        }
    }
    sum(1,2,3,4,5);

    // 类数组
    // let root:HTMLElement | null = document.getElementById('root');


    class myArray<T>{
        private list:T[] = [];
        add(val:T){
            this.list.push(val)
        }
        getMax(): T{
            let result:T = this.list[0];
            // 取一个数组中的最大值
            for(let i= 1;i<this.list.length;i++){
                if(this.list[i]>result){
                    result = this.list[i]
                }
            }
            return result;
        }
    }
    let arr = new myArray<number>();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(10);
    let result3: number = arr.getMax()
    console.log(result3)


    // 接口泛型
    interface Calculate{
        <T>(a:T,b:T): T   // 作用于这个函数
    }
    let add: Calculate = function <T> (a:T,b:T): T{
        // return a + b;   // 定义的时候不知道
        return a
    }

    let result5 = add<number>(1,2)
    console.log(result5)        // 3



    // 多个类型参数   如何在不增加中间变量的情况下,交换两个变量的值
    function swap<A,B>(tuple:[A,B]):[B,A]{
        return [tuple[1],tuple[0]]
    }
    let result6 = swap<string, number>(['xx',2]);
    console.log(result6)


    // 默认泛型类型
    function createArray2<T = number>(length:number,val: T ):Array<T>{
        let result: Array<T> = [];
        for(let i = 0;i<length;i++){
            result[i] = val
            // result[i] = 1   //  Type '1' is not assignable to type 'T'.'1' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint '{}'.

        }
        return result;
    }
    let result8 = createArray2<string>(1,'2')


    // 泛型的约束
    // 在函数中使用泛型的时候,由于预先不知道具体的类型,所以不能访问响应的类型的方法

    // 用接口来约束泛型,继承接口
    interface lengthWise{
        length: number
    }
    function loogger<T extends lengthWise>(val: T){
        console.log(val.length);    //Property 'length' does not exist on type 'T'.
    }
    loogger('哈哈哈')


    // 约束
    interface Cart<T>{
        list: T[]
    }
    let cart: Cart<string> = {
        list:['1','2']
    }

    // 泛型类型别名
    type Cart2<T> = {list:T[]} | T[];
    let c1:Cart2<string> = { list:['1'] }
    let c2:Cart2<string> = ['1'];


    // interface 定义一个试试在这的接口,他是一个真正的类型
    // type 一般用来定义别名,并不是一真正的类型

    /*
    * interface和type的区别
    * 接口创建了一个新的名字,它可以在其他任意地方被调用.而类型别名并不创建新的名字,例如报错信息就不会使用别名
    * 类型别名不能被extends和implements,这个时候我们应该尽量使用接口代替类型别名
    * 当我们需要使用联合类型绘制元素类型的时候,类型别名会更适合
    * */


}




