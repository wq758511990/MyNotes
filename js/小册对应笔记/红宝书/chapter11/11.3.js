// async function foo () {
//   console.log('1')
//   return '3'
// }

// const res = foo()
// console.log('res', res)
// console.log('2')
// foo().then(console.log)

// 异步函数仍然具有普通 JavaScript 函数的正常行为。正如下面的例子所示，foo()函数仍然会
// 在后面的指令之前被求值：
// async function foo () {
//   console.log(1);
// }
// foo();
// console.log(2);

// async function foo1 () {
//   console.log('1')
//   throw '3'
// }

// foo1().catch(console.log)
// console.log('2')


// 不过，拒绝期约的错误不会被异步函数捕获：
// async function foo3 () {
//   console.log('1')
//   Promise.reject('3')
// }

// foo3().catch(console.log)
// console.log('2')

// async function bar () {
//   console.log(await 'bar')
// }
// bar()
// console.log('bar1')

async function foo () {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}

async function bar () {
  console.log(4);
  console.log(await 6);
  console.log(7);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5);