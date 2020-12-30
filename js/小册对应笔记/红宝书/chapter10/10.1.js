const ints = [1, 2, 3]
console.log(ints.map(num => num * 2))

function foo () {
  bar()
}
console.log(foo.name)

function bar () {
  console.log(bar.caller) // [Function: foo]
}

foo()

// apply()和 call()真正强大的地方并不是给函数传参，而是控制函数调用上下文即函数体内 this
// 值的能力。

// window.color = 'red'

// let o = {
//   color: 'blue'
// }

// function sayColor () {
//   console.log(this.color)
// }

// sayColor.apply(window) // red
// sayColor.apply(o) // blue
// sayColor.apply(this) // red

if (true) {
  function sayHi () {
    console.log('say hi')
  }
} else {
  function sayHi () {
    console.log('say hello')
  }
}

sayHi()