/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummuNode = new ListNode(-1)
  dummuNode.next = head
  let pre = dummuNode

  // 走 left 步， 找到左节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  // // 走right - left + 1 步， 找到右节点
  // let rightNode = pre
  // for (let i = 0; i < right - left + 1; i++) {
  //   rightNode = rightNode.next
  // }

  // // 切出链表
  // let leftNode = pre.next
  // let curr = rightNode.next

  // pre.next = null
  // rightNode.next = null

  // reverseList(leftNode)

  // pre.next = rightNode
  // leftNode.next = curr
  // return dummuNode.next

  // function reverseList (head) {
  //   let pre = null
  //   let cur = head

  //   while (cur) {
  //     const next = cur.next
  //     cur.next = pre
  //     pre = cur
  //     cur = next
  //   }
  // }



  // 反转链表左节点
  let curr = pre.next
  // 遍历过程中直接反转
  // curr：指向 待 反转区域的第一个节点 left；
  // next：永远指向 curr 的下一个节点，循环过程中，curr 变化以后 next 会变化；
  // pre：永远指向待反转区域的第一个节点 left 的前一个节点，在循环过程中不变。

  // 1、next 指向 curr.next
  // curr.next 指向 next.next  解决反转之后 找不到后续节点的问题
  // next.next 指向 pre.next 即插到头部
  // pre.next 指向 next 头部重新指向
  for (let i = 0; i < right - left + 1; i++) {
    let next = curr.next
    curr.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummuNode.next
};

