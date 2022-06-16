/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement = function (nums1, nums2) {
  let map = new Map(), stack = [], ans = []
  nums2.forEach(num => {
    while (stack.length && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num)
    }
    stack.push(num)
  })
  stack.forEach(num => { map.set(num, -1) })
  nums1.forEach(num => { ans.push(map.get(num)) })
};