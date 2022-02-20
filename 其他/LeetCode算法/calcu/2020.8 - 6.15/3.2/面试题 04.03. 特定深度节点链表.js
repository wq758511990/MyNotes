/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  if (!tree.val) {
    return tree
  }
  let deque = [tree]
  const ans = []
  while (true) {
    let curNodes = []
    let head = new ListNode(null)
    ans.push(head)
    while (deque.length) {
      const node = deque.shift()
      head.val = node.val
      head.next = new ListNode(null)
      head = head.next
      node.left && curNodes.push(node.left)
      node.right && curNodes.push(node.right)
    }
    if (curNodes.length) {
      deque = curNodes
      curNodes = []
    } else {
      ans.push(head)
      return ans
    }
  }
};