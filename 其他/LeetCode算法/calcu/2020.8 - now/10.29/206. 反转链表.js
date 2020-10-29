/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  let pre = head;
  let cur = null;
  while (pre) {
    let tmp = new ListNode(pre.val);
    tmp.next = cur;
    cur = tmp;
    pre = pre.next;
  }
  return cur;
};
