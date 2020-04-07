/*
* 内存管理--开辟了一段连续的内存地址
* 访问时间快
*
* 访问:  O(1)的复杂度
* 插入:  O(n)的复杂度
* 移除:  O(n)的复杂度

* */


function moveZeroes (nums) {
    let newArr = [];
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == 0) {
            newArr.push(0);
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums)
    console.log(newArr,'newArr');
    for(let i = 0;i<newArr.length;i++){
        nums.push(0)
    }
    console.log(nums,1234)
    return nums
};
console.log(moveZeroes([0,0,0,1,2,3,4]),123)
//

function moveZeroes (nums) {
    let j = 0;
    for(let i = 0;i<nums.length;i++) {
        if(nums[i]!=0){
            if(j < i){
                nums[j] = nums[i]
                nums[i] = 0
            }
            
        }
    }
    return nums
};
// console.log(moveZeroes([0,0,0,1,2,3,4]))






/*
* Linked List(链表)
*
* https://www.cnblogs.com/jaxu/p/11277732.html
*
* Value:
* Next: -> 指针(指向下一个元素)
*
*  双向链表: 既能往前走,也能往后走
*
*  循环列表: 尾指向头
*
*  单链表: 只有一个叫做单链表
*
*
*  增加节点:  O(1)复杂度
*  删除节点:  O(1)复杂度
*
*
*  访问: O(n)的复杂度
* */








/*
* Skip list (跳表)
* 中心思想:  1.升维
*           2. 空间变时间
*
*
* 时间复杂度: O(log2n)
* 空间复杂度: O(n)
*
* */



/*
* 练习步骤:
*   1. 5-10分钟: 读题和思考
*   2. 有思路: 自己开始做和写代码; 不然,马上看题解
*   3. 默写背诵,熟练
*   4. 然后开始自己写(闭卷)
* */




// 算法题:
// https://leetcode-cn.com/problems/move-zeroes/   移动零
//
