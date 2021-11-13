// 集合,无序且唯一的数据结构

let mySet = new Set()
let mySet2 = new Set()

// 添加
mySet.add(1)

// 存在
mySet.has(1)
mySet.has(5)

// 删除
mySet.delete(1)

// 迭代set
for (let item of mySet)
for (let key of mySet.keys())
for (let value of mySet.values())
for (let [key value] of mySet.entries())

// set => array
Array.from(mySet)
[...mySet]

// array => set
new Set([1,2,3])

// 求交集
const intersection = new Set([...mySet].filter(item => mySet2.has(item)))

// 求差集
const difference = new Set([...mySet].filter(item => !mySet2.has(item)))