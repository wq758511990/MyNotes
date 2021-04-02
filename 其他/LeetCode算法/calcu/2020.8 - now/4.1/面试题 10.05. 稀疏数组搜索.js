/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  let l = 0, r = words.length - 1
  while (l <= r) {
    if (words[l] === '') {
      l += 1
      continue
    }
    if (words[r] === '') {
      r -= 1
      continue
    }
    let mid = Math.floor((l + r) / 2)
    if (words[mid] < words[l]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}

console.log(
  findString(
    ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''],
    'ball'
  )
)
a = {
  a: 2,
  test () {
    let a = 1
    console.log(this.a)
  }

}
a.test()