/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
     if (!head) {
         return head
     }
    let pNode = head
    const firstVal = head.val
    let map = new Map()
    map.set(firstVal, 1)
    while(pNode.next) {
        const val = pNode.next.val
        if (map.get(val)) {
            pNode.next = pNode.next.next
        } else {
            map.set(val, 1)
        }
        pNode = pNode.next
    }
    return head
};

// var deleteDuplicates = function(head) {
//     if (!head) {
//         return head;
//     }

//     let cur = head;
//     while (cur.next) {
//         if (cur.val === cur.next.val) {
//             cur.next = cur.next.next;
//         } else {
//             cur = cur.next;
//         }
//     }
//     return head;
// };