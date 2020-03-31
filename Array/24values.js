/*
* values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
* 语法:
*   arr.values()
* 返回值:
*   一个新的 Array 迭代对象
* 是否改变原数组:
*   不改变
* */
let arr = ['a','b',3,4,5,6];

let iterator = arr.values();

for(let keys of iterator){
    console.log(keys)     // 'a','b',3,4,5,6
}
