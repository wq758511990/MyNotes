var kthToLast = function (head, k) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let length = arr.length
  return arr[length - k]
}
