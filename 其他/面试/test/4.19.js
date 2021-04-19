// function test (person) {
//   person.age = 26
//   person = {
//     age: 1,
//     name: 'xxx'
//   }
//   return person
// }

// const p1 = {
//   age: 18,
//   name: 'bbb'
// }

// const p2 = test(p1)
// console.log(p1)
// console.log(p2)

function myInstanceOf (left, right) {
  if (typeof left !== 'object' || left === null) {
    return false
  }
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto == right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
console.log(myInstanceOf(new Object([1]), Array))