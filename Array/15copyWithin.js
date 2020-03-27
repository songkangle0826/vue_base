/*
* copyWithin() 方法: 复制数组的前两个元素到后两个元素上
* 语法:
*   copyWithin(target,start,end);
*
* 参数:
*   target: 复制到指定目标的所以
*   start: 元素复制的起始位置
*   end: 元素复制的终点位置
* 返回值:
*   替换后的数组
* 是否改变原数组
*   是
* */

let arr = [1,2,3,4,5];

// console.log(arr.copyWithin(3));

// console.log(arr.copyWithin(0,3));       // [4,5,3,4,5]

console.log(arr.copyWithin(1,3,4));        // [1,4,3,4,5]


console.log(arr)            //