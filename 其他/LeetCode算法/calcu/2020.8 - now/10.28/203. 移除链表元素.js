/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //   let sentinel = new ListNode(null);
  //   sentinel.next = head;
  //   let prev = sentinel,
  //     curr = head;
  //   while (curr) {
  //     if (curr.val === val) {
  //       prev.next = curr.next;
  //     } else {
  //       prev = curr;
  //     }
  //     curr = curr.next;
  //   }

  //   return sentinel.next;

  let pre = new ListNode(null);
  pre.next = head;
  let res = pre.next;
  while (head) {
    if (pre.val === val) {
      pre.next = head.next;
    } else {
      pre = head;
    }
    head = head.next;
  }
  return res;
};
