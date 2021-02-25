/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

// var addTwoNumbers = function (l1, l2) {
//   let l1Str = ''
//   let l2Str = ''
//   let nodes = []
//   while (l1) {
//     l1Str += l1.val
//     l1 = l1.next
//   }
//   while (l2) {
//     l2Str += l2.val
//     l2 = l2.next
//   }
//   l1Str = l1Str.split('').reverse().join('')
//   l2Str = l2Str.split('').reverse().join('')

//   let ans = parseInt(l1Str) + parseInt(l2Str)
//   console.log('ans', ans.toPrecision(l1Str.toString().length))
//   ans = ans.toString()
//   ans = ans.split('').reverse().join('')
//   for (let i = 0; i < ans.length; i++) {
//     let node = new ListNode(parseInt(ans[i]))
//     nodes.push(node)
//   }
//   for (let i = 0; i < nodes.length - 1; i++) {
//     nodes[i].next = nodes[i + 1]
//   }
//   return nodes[0]
// };

var addTwoNumbers = function (l1, l2) {
  let root = new ListNode(null)
  let p = root
  let carry = 0
  while (true) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    val += carry
    // 进位
    carry = Math.floor(val / 10)
    // 值
    res = val % 10
    p.next = new ListNode(res)
    p = p.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next

    if (!l1 && !l2 && !carry) break
  }
  return root.next
};

const l1arr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
const l2arr = [5, 6, 4]

let l1nodes = []
let l2nodes = []
for (let i = 0; i < l1arr.length; i++) {
  let node = new ListNode(l1arr[i])
  l1nodes.push(node)
}

for (let i = 0; i < l2arr.length; i++) {
  let node = new ListNode(l2arr[i])
  l2nodes.push(node)
}

for (let i = 0; i < l1nodes.length - 1; i++) {
  l1nodes[i].next = l1nodes[i + 1]
}

for (let i = 0; i < l2nodes.length - 1; i++) {
  l2nodes[i].next = l2nodes[i + 1]
}

console.log(addTwoNumbers(l1nodes[0], l2nodes[0]
))