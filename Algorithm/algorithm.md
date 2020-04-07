algorithm(a哥瑞登)

# 数据
## 一维
### 基础
- 数组 array<string>
- 链表 linked list
### 高级 
- 栈(stack), 
- 队列(queue),
- 双端队列(deque),
- 集合(set),
- 映射(map==hash or map)

## 二维
### 基础
- 树(tree)
- 图(graph)
### 高级
- 二叉搜索树(binary search tree)  包含(red-black tree(红黑树), AVL)
- 堆(heap)
- 并查集(disjoint set)
- 字典树(trie)

## 特殊
- 位运算(Bitwise)
- 布隆过滤器(BloomFilter)
- 缓存 LRU Cache


## 算法
- if-else,switch->branch
- for Loop
- 递归
- 搜索Search: 深度优先搜索DEpth first search, 广度优先算法 Breadth first search
- 动态规划 Dynamic Programming
- 二分查找 Binary search
- 贪心算法
- 排序
- 数学几何

```
/*
    刻意练习  --- 过变数(五毒神掌)
    自顶向下编程
        - 主要的逻辑
        - 次要的逻辑
*/ 
```

## 时间复杂度和空间复杂度
### 时间复杂度(Big O notation)
- O(1): Constant Complexity         常数复杂度
```javascript
var n = 1000;
console.log(n)

var n = 1000;
console.log(n);
console.log(n);
console.log(n);
```
- O(log n): Loggarithmic Complexity 对数复杂度
```javascript
for(var i = 0;i <= n;i=i*2){
    console.log(i)
}   // log(2n)

/*
* log
* */ 

```
- O(n): Linear Complexity           线性时间复杂度
```javascript
for(var i = 0;i <= n; i++){
    console.log(i)
}
for(var j = 0;j <= n; j++){
    console.log(j)
}
// 两个循环并列的 是2n次的,为O(n)的时间复杂度
```
- O(n^2):N Square Complexity        平方
```javascript
for(var i = 0;i <= n; i++){
    for(var j = 0;j <= n; j++){
        console.log(i+j)
    }
}
````
- O(n^3):N Square Complexity        立方
- O(2^n): Exponential Growth        指数
```javascript

```
- O(n!): Factorial                  阶乘

注意: 只看最高杂度的运算



降低时间复杂度
```javascript
// 1+2+3+4+....+100
let num = 0
for(var i=1;i<=n;i++){
    num+=i;  
}              // O(n)
n(n+1)/2;      //  O(1)
```

####  主定理
https://baike.baidu.com/item/%E4%B8%BB%E5%AE%9A%E7%90%86/3463232?fr=aladdin

