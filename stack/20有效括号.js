// https://leetcode-cn.com/problems/valid-parentheses/
// 解题思路：遇到左括号则进栈，遇到右括号则取出栈顶元素并比较是否一致，如果不一致直接返回false，最后栈为空则全部匹配
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (map[current]) {
      arr.push(current)
    } else {
      const top = arr.pop()
      if (current !== map[top]) {
        return false
      }
    }
  }
  return arr.length === 0
}
