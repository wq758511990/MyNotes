// console.log(a)
// let a = 123

Function.prototype.myCall = function (obj, ...args) {
  console.log('args', args)
  obj.fn = this
  const res = obj.fn(...args)
  delete obj.fn
  return res
}

function test () {
  console.log(this.a)
}

let obj = {
  a: 1
}

test.myCall(obj, 1, 2, 3)


function test (groupSizes) {
  const dict = {}
  const res = []
  for (let i = 0; i < groupSizes.length; i++) {
    let val = groupSizes[i]
    dict[val] = i
  }
  console.log('dict', dict)
}


console.log(test([3, 3, 3, 3, 3, 1, 3]))