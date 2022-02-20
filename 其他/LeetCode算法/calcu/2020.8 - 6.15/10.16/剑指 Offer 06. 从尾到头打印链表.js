/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let ans = []
  while (head.val) {
    ans.splice(0, 0, head.val)
    head = head.next
  }
  return ans
};