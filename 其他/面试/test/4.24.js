// const a = {
//   b: 2,
//   foo: function () { console.log(this.b) }
// }
// const b = 123
// function bar (foo) {
//   // 输出什么？
//   // foo()
//   console.log(this)
// }
// bar(a.foo)

// function Super () { }
// Super.prototype.getNumber = function () {
//   return 1
// }

// function Sub () { }
// Sub.prototype = Object.create(Super.prototype, {
//   consturctor: {
//     value: Sub,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// })

// let s = new Sub()

// let map = new WeakMap()
// function deepClone (obj) {
//   if (obj instanceof Object) {
//     if (obj instanceof Object) {
//       if (map.has(obj)) {
//         return map.get(obj)
//       }
//     }

//     let newObj
//     if (obj instanceof Array) {
//       newObj = []
//     } else if (obj instanceof Function) {
//       newObj = function () {
//         return obj.call(this, arguments)
//       }
//     } else if (obj instanceof RegExp) {
//       newObj = new RegExp(obj.source, obj.flags)
//     } else if (obj instanceof Date) {
//       newObj = new Date(obj)
//     } else {
//       obj = {}
//     }

//     let desc = Object.getOwnPropertyDescriptors(obj)
//     let clone = Object.create(Object.getPrototypeOf(obj), desc)
//     map.set(obj, clone)
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[key] = deepClone(obj[key])
//       }
//     }
//     return newObj
//   }
//   return obj
// }

let map = new WeakMap()
function myDeepClone (obj) {
  if (obj instanceof Object) {
    if (map.has(obj)) {
      return map.get(obj)
    }
    let newObj
    if (obj instanceof Array) {
      newObj = []
    } else {
      newObj = {}
    }
    let desc = Object.getOwnPropertyDescriptors(obj)
    let clone = Object.create(Object.getPrototypeOf(obj), desc)
    map.set(obj, clone)
    for (let key in obj) {
      newObj[key] = myDeepClone(obj[key])
    }
    return newObj
  }
  return obj
}

let a = { key: 1 }
a.target = a

let b = myDeepClone(a)

console.log(b)

function myInstanceof (left, right) {
  let prototype = right.prototype
  let left = left.__proto__

  while (true) {
    if (left === prototype) {
      return true
    }
    if (left === null) {
      return false
    }
    left = left.__proto__
  }
}