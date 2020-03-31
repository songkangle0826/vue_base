/*
* keys() 方法返回一个函数数组中每个索引建的Array Iterator对象
* 语法:
*   arr.keys()
* 返回:
*   一个新的Array迭代器对象
* 是否改变原数组:
*   不改变原数组
* */


let arr = [1,2,3,4,5,6];
let arrObj = arr.keys();
console.log(arrObj,234);

for(let keys of arrObj){
    console.log(keys)
}