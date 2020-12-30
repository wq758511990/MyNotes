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
var mergeTwoLists = function (l1, l2) {
  let pre = ListNode(-1)
  if (l1.val <= l2.val) {
    cur = l1
    l1 = l1.next
  } else {
    cur = l2
    l2 = l2.next
  }
  pre.next = cur
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
  }
  if (l1) cur.next = l1
  else cur.next = l2
  return pre.next
}
