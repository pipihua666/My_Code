## 数据结构和算法简介

- 数据结构相当于锅碗瓢盆，锅碗瓢盆需要通过`食谱`来做出美味的佳肴
- 算法相当于食谱，食谱需要通过`锅碗瓢盆`做出美味的佳肴
- 程序 = 数据结构 + 算法，相当于美味佳肴

## 时间复杂度

- 一个函数，用大 O 来表述，比如 O(1),O(n),O(logN)
- 定性描述该算法的运行时间

## 空间复杂度

- 一个函数，用大 O 来表述，比如 O(1),O(n),O(n^2)
- 算法在运行过程中`临时`占用存储空间的大小的量度

## 栈

> JS 中的栈用数组表示 []

### 栈是什么

- 一个后进先出的数据结构，相当于蜂窝煤炉
- JavaScript 是没有栈这个数据结构的，但是可以使用 Array 来实现栈的所有功能

### 栈的应用场景

- 需要`后进先出`的场景
- 比如：十进制转二进制、判断字符串的括号是否有效、函数的调用堆栈......

### 20 有效括号

#### 解题步骤

1. 遇到左括号则入栈，遇到右括号则取出栈顶元素
2. 如果取出的元素和括号不匹配则直接返回 false。
3. 最后栈的长度为 0 则匹配，不为 0 则不匹配

## 队列

> JS 中的队列用数组表示 []

### 933 最近的请求

#### 解题步骤

1. 维护一个队列，遍历每个元素入队
2. 该队列只保存[t-3000,t]范围内的数，不是则踢出队列

## 链表

> JS 中的链表用对象来表示 {val, next}

### 链表与数组的区别

- `链表`利于删除和添加元素,
- `数组`适用于查找元素，删除元素的话需要移动后续元素

### 237 删除链表中的节点

#### 解题步骤

1. 替换目标节点的值为下节点的值
2. 替换目标节点的`next`指针是下一个节点的`next`指针

### 206 反转链表

#### 解题步骤

1. 声明两个指针，p1 指向头节点，p2 指向空 null
2. 遍历(while)链表，使用 p1,p2 反转每个节点，最后 p1 为空则退出遍历

### 2 两数相加

#### 解题步骤

1. 声明一个新链表且声明指针
2. 使用指针遍历两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位处理

### 83 删除排序链表中的重复元素

#### 解题步骤

1. 遍历链表
2. 如果当前节点的值等于下一个节点的值，则删除下一个节点，删除方法是改变 next 指向
3. 如果不等于则移动指针到下一位

### 141 环形链表

#### 解题思路

操场跑步的人，一倍速和二倍速的人一定会在第二圈的终点相遇

#### 解题步骤

1. 声明一个快指针 fast ,一个慢指针 slow
2. fast 每次走两步，slow 每次走一步
3. 如果 slow 走完了还没相遇，则不存在环

## 集合

> JS 中的集合是 Set

### 什么时候用集合？

涉及到无重复值得存储时

## 字典

> JS 中的字典是 Map

### 什么时候用字典？

涉及到无重复的键值对的存储时

### 1 两数之和

#### 解题思路

婚姻介绍所，num[i]是相亲人，want 是想要的目标对象，如果没找到，就把相亲人的姓名(num[i])和地址(i)存进介绍谱(map)里边，留给以后的人来相亲。如果找到了就返回各自的地址

### 3 无重复字符的最长子串

#### 解题思路

1. 先找出所有的不包含重复字符的子串
2. 找出长度最大的那个子串，返回其长度

#### 解题步骤

1. 声明一个滑动窗口由 left 和 right 指针组成的区间
2. 遍历 right 指针
3. 如果字典中存在当前元素，且当前元素的坐标在滑动窗口中，则移动 left 到字典中的当前坐标前
4. 更新字典中的当前元素的坐标
5. 取最长的子串长度

## 树

> JS 中用对象来表示树

### 深度和广度优先遍历

1. 深度优先遍历：尽可能深对的搜索树的分支
2. 广度优先遍历：先访问离根节点最近的节点

## 图

> JS 使用 Object 和 Array 来表示图, {A:['B'],B:[],C:['B']}

### 图的常用操作

1. 深度优先遍历
2. 广度优先遍历

## 堆

> JS 中用数组表示堆
>
> 1. 左侧子节点的位置是：2 \* index + 1
> 2. 右侧的子节点的位置是： 2 \* index + 2
> 3. 父节点位置是 (index - 1) / 2

### 堆的应用

1. 高效、可快速的找出最大值呵呵最小值，时间复杂度是 O(1)
2. 找出第 k 个最大（小）元素

## 分而治之

> `算法设计`中的一种方法，通过分解成`互相独立`的`子问题`来反复求解子问题，从而解决原来的问题

## 动态规划

> `算法设计`中的一种方法，通过分解`相互重叠`的`子问题`，来反复求解子问题，从而解决原来的问题

### 解题思路

1. 定义子问题
2. 反复执行子问题

## 贪心算法

> `算法设计`中的一种方法，期盼通过每个阶段的`局部最优`选择，从而达到全局最优，结果并不一定是最优

## 回溯算法

### 什么问题适合用回溯算法解决？

1. 有多条路
2. 这些路里，有死路，也有出路
3. 通常需要递归来模拟所有的路
