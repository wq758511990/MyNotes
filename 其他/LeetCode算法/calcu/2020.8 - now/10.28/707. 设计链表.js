/**
 * Initialize your data structure here.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = new ListNode(0);
  this.len = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.head.next;
  if (index < 0 || index > this.len) return -1;
  while (index--) {
    node = node.next;
  }
  return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.len, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.len) return;
  if (index < 0) index = 0;
  this.len++;
  let pred = this.head;
  while (index--) {
    pred = pred.next;
  }
  let to_add = new ListNode(val);
  to_add.next = pred.next;
  pred.next = to_add;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.len) return;

  this.len -= 1;

  pred = this.head;

  while (index--) {
    pred = pred.next;
  }
  pred.next = pred.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2); //链表变为1-> 2-> 3
console.log(linkedList.get(1)); //返回2
linkedList.deleteAtIndex(1); //现在链表是1-> 3
console.log(linkedList.get(1));
