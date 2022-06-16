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
 var getIntersectionNode = function(headA, headB) {
     let prevA = headA
     let prevB = headB
     while(prevA !== prevB) {
         prevA = prevA === null ? headB : prevA.next
         prevB = prevB === null ? headA : prevB.next
     }
     return prevA
    }

console.log(getIntersectionNode())