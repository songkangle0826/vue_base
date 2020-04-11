/*
* toString() 返回一个字符串，表示指定的数组及其元素。
* 语法:
*   arr.toString()
* 返回值:
*   一个表示指定的数组及其元素的字符串。
*  是否改变原数组:
*   不改变原数组
* */
let arr = [1,2,3,4,5,6];
console.log(arr.toString(),arr)     // 1,2,3,4,5,6,




var twoSum = function(nums, target) {
    let objMap = new Map;
    for(let i = 0;i<nums.length;i++){
        let value = target - nums[i]
        objMap.set(value,i)
    }
    for(let i = 0;i<nums.length;i++){
        if(objMap.has(nums[i])){
            if(objMap.get(nums[i]) != i){
                return [i,objMap.get(nums[i])]
            }
        }
    }
    return [];
};

console.log(twoSum([3,2,4],6))