/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 设A1为A的不重复部分 B1位B的不重复部分 C位重复部分
  // 则 A1 + C + B1 = B1 + C + A1
  // 若无相交则 A + B = B + A 最后同为null
  let h1 = headA,
    h2 = headB;
  while (h1 !== h2) {
    h1 = h1 ? h1.next : headB;
    h2 = h2 ? h2.next : headA;
  }
  return h1;
};
