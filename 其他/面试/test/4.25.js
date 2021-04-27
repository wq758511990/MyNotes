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
  let map = {}
  const res = []
  for (let i = 0; i < groupSizes.length; i++) {
    let val = groupSizes[i]
    if (!map[val]) {
      map[val] = [i]
      if (map[val].length === val) {
        res.push(map[val])
        map[val] = []
      }
      continue
    }
    if (map[val].length < val) {
      map[val].push(i)
    }
    if (map[val].length === val) {
      res.push(map[val])
      map[val] = []
    }

  }
  return res
}


console.log(test([3, 3, 3, 3, 3, 1, 3]))