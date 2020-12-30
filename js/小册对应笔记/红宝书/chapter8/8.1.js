// let person = {}
// Object.defineProperty(person, 'name', {
//   value: 'Nicholas',
//   writable: false,
// })

// console.log(person.name)
// person.name = 'www'
// console.log(person.name)

console.log('============== 8.1.4 合并对象 =============')
let a = { a: '1' }
let b = { b: '2' }

Object.assign(a, b)
console.log(a)
b.b = '321'
console.log(a)
console.log(b)

console.log('===============8.1.5 对象标识及相等判定===============')

console.log('============8.1.7 对象解构============')

// 解构在内部使用函数 ToObject()（不能在运行时环境中直接访问）把源数据结构转换为对象。
// 这也意味着（根据 ToObject()的定义），null和 undefined 不能被解构，否则会抛出错误。
let { length } = 'football'
console.log(length)

let person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'Software engineer',
  },
}

// let personCopy = {}(
//   ({ name: personCopy.name, age: personCopy.age, job: personCopy.job } = person)
// )

// console.log(personCopy)

function printPerson({ name, age } = person) {
  console.log('name', name)
  console.log(age)
}
printPerson()
