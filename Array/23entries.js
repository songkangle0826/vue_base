/*
* entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
* */
let arr = ['a','b','c'];

let iterator = arr.entries();

for(let key of iterator){
    // console.log(key)        // [0,'a']  [1,'b']  [2,'c']
}





/*
* Iterator:  迭代器 ==== 进行遍历功能的一个接口
*   1. 遍历器(Iterator)是一种接口,为各种不同的数据结构提供统一的访问机制.任何数据类型只要部署了Iterator接口,就可以完成遍历操作,(即一次处理改数据结构的所有成员)
*   2. Iterator的作用有三个:
*       一是为各种数据结构,提供一个统一的,简便的访问接口
*       二是使得数据结构的成员能够按某种顺序排列
*       三是es6创造了一种新的遍历命令for...of循环,Iterator接口主要供for...of消费
*   3.在ES6中,有些数据结构原生具备Iterator接口(比如数组),即使不用任何处理,就可以被for...of循环遍历,有些就不行(比如对象)
*       原因在,数组等这些数据结构原生部署了Symbol.iterator属性, 对象等没有部署
*
*       凡是部署了Symbol.iterator属性的数据结构,就称为部署了遍历器接口,调用这个接口,就会返回一个遍历器对象
*
*    4. 在ES6中,有三类数据结构原生具备Iterator接口: 数组,某些类似数组的对象,Set和Map
*    5. 一个为对象添加Iterator接口的例子
*
* */

let obj = {
    name: '哈哈哈',
    age: 10,
    job: '123456',
    [Symbol.iterator](){
        const self = this;
        let keys = Object.keys(self);
        let index = 0;
        console.log(keys,index)
        return{
            next(){
                if(index < keys.length){
                    return{
                        value: self[keys[index++]],
                        done: false
                    }
                }else{
                    return {
                        value: false,
                        done: true
                    }
                }
            }
        }
    }
}

for(let keys of obj){
    console.log(keys);
}



// 在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构。

let objSet = new Set([1,2,3,4,5,6]);
console.log(objSet);
for(let objkeys of objSet){
    console.log(objkeys);
}