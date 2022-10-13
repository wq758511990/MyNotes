/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function numComponents(head: ListNode | null, nums: number[]): number {
  let cnt = 0;
  let hasCom = false;
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], true);
  }
  while (head) {
    if (numMap.get(head.val)) {
      hasCom = true;
      if (head.next === null) {
        cnt++;
      }
    } else {
      if (hasCom) {
        hasCom = false;
        cnt++;
      }
    }
    head = head.next;
  }
  return cnt;
}
