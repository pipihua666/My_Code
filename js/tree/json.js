// 遍历json的所有节点值

const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: [1, 2, 3]
}

const dfs = (root, path = []) => {
  console.log(root, path)
  Object.keys(root).forEach(k => {
    dfs(root[k], [...path, k])
  })
}

dfs(json)
