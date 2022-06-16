/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let slow = head, fast = head
    while(slow) {
        slow = slow.next
        fast = fast && fast.next && fast.next.next
        if (slow === fast && slow !== null) {
            return true
        }
    }
    return false
};