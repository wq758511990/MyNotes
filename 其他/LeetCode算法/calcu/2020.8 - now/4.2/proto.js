// function Teacher () {
//   this.name = 'xxx'
// }

// const teacher = new Teacher()
// console.log(teacher.__proto__ === Teacher.prototype)
// console.log(Teacher.prototype.constructor === Teacher)
// console.log(Teacher.prototype.__proto__ === Object.prototype)
// console.log(Teacher.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(teacher.toString)

// ===========

// function create () {
//   let a = 3
//   return function useA () {
//     a += 3
//     console.log('a', a)
//   }
// }

// let create1 = create()
// let create2 = create()

// create1()
// create2()

function deepClone (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let res
  if (obj instanceof Array) {
    res = []
  } else {
    res = {}
  }

  for (let key in obj) {
    res[key] = deepClone(obj[key])
  }
  return res
}

// const obj = { a: 1, b: 2, c: { d: { e: { f: 5, g: [1] } } } }
// const obj1 = deepClone(obj)
// obj1.c.d.e.f = 10
// obj1.c.d.e.g.push(2)
// console.log('obj1', JSON.stringify(obj1))
// console.log('obj', JSON.stringify(obj))

const obj = {
  age: 10,
  name: '123'
}

function test (a) {
  console.log(this.age)
  console.log(this.name)
  console.log(a)
  return 34
}

Function.prototype.myCall = function (obj, ...arguments) {
  // 思路， 在obj上添加一个函数， 执行
  obj.fn = this
  const res = obj.fn(...arguments)
  delete obj.fn
  return res
}

Function.prototype.myApply = function (obj, arguments) {
  if (!(arguments instanceof Array)) {
    throw new Error('参数必须是个数组')
  }
  obj.fn = this
  const res = obj.fn(...arguments)
  delete obj.fn
  return res
}

Function.prototype.myBind = function (obj, ...args) {
  // bind 返回一个新的函数
  obj.fn = this
  return function () {
    const newArgs = args.concat(arguments)
    const res = obj.fn(...newArgs)
    delete obj.fn
    return res
  }
}


// console.log(test.myApply(obj, [3]))

const test1 = test.myBind(obj, 3)
test1()