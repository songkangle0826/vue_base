/*
*
* splice()  方法向/数组中添加/删除项目,然后返回被删除的项目
* 注释:
*   改方法会改变原始数组
* 语法:
*   arrayObject.splice(index,howmany,item1,item2,...itemX)
* 参数
*   index 必须,整数(从index(下标)开始处删除) 规定添加/删除项目的位置,使用负数可以从数组尾部处规定位置
*   howmany 必须.要删除的项目数量,如果设置为0,则不会删除项目
*   item1,item2...itemX 可选,想数组添加的新项目
*  返回值:
*   返回被删除的项目(以数组的格式)
* */


let arr = [1,2,3,4,5];

arr.splice(1,1);        // [2]  == 返回被删除的数组
    console.log(arr);   // [1,3,4,5]
arr.splice(1,1,6);      // [3]
    console.log(arr);   // [1,6,4,5]
arr.splice(1,2,8,9);    // [6,4]
    console.log(arr);   // [1,8,9,5]



