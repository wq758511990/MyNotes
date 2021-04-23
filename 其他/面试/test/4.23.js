// function foo () {
//   console.log(this.a)
// }

// let obj = {
//   a: 1,
//   foo: foo
// }

// obj.foo()

// let c = new foo()
// c.a = 3
// console.log(c.a)

// var a = 1
// const fn = () => {
//   console.log(this.a)
// }
// const obj = {
//   a: 2,
//   c: {
//     a: 3,
//     fn
//   }
// }
// obj.c.fn()

function fn () {
  let a = 1
  return function () {
    a++
    console.log('a', a)
  }
}

let fn2 = fn()
fn2()
fn2()
fn2()
fn2()

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
  queueMicrotask(() => console.log('queueMicrotask'))
  console.log('promise');
});

console.log('script end');