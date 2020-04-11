/*
 * some()方法 用于检测数组中的元素是否满足知道条件
 * some()方法会依次执行数组的每个元素,
 *  如果有一个元素满足,则表达式返回true,剩余的元素不在执行检测
 *  如果没有满足条件的元素,则返回false
 *  语法:
 *      arrayObj.some(function(currentValue,index,arr),thisValue)
 *  参数:
 *    函数
 *  返回值:
 *      true(只要有一个满足条件的就返回true)或false(一个都没有满足条件的就返回false)
 *  是否改变数组:
 *      不改变原来的数组
*/


let arr = [1,2,3,4,5,6,7,8];
let obj = {a:1}
let bool = arr.some((value,index,some)=>{
    console.log(value,index,some,obj);
    // return value >= 10;
    
    return value == 8;
    
},obj)
console.log(bool);
console.log(arr);
