var twoSum = function (nums, target) {
  var arr = []
  arr.unshift(
    nums.findIndex((a, b, c) => {
      if (c.indexOf(target - a) != -1) {
        arr.push(c.indexOf(target - a))
      }
      return c.indexOf(target - a) != -1
    })
  )
  return arr
}

console.log(twoSum([3, 2, 4], 6))
