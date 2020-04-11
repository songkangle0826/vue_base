/*
 * every()用于检测数组所有元素是否都符合条件,检测数组中所有的元素
 * 语法:
 *  arrayObj.every(function(value,index,arr){},thisValue);
 * 返回值:
 *  true 检测数组中的每一项都得满足,返回true
 *  false检测数组中的每一项,只要有一项不符合,返回false
 * 参数:
 *   函数
 * 是否改变原数组:
 *  不改变原数组
 */
 let arr = [1,2,3,4,5,6,7,8];
 let obj = {a:1}
 let bool = arr.every(function(value,index,arr){
     console.log(value,index,arr,obj);
     // return value < 7        // false
     return value < 10          // true
 },obj)
 
 console.log(bool,arr)