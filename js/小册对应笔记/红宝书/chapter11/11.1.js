// let p = new Promise((resolve, reject) => setTimeout(() => {
//   resolve
// }, 1000))
// setTimeout(console.log, 0, p)

// let p1 = new Promise((resolve, reject) => resolve());
// setTimeout(console.log, 0, p1);

// let p2 = Promise.reject()
// let onRejected = function (e) {
//   setTimeout(console.log, 0, 'rejected')
// }

// p2.then(null, onRejected)
// p2.catch(onRejected)

// let p3 = Promise.resolve();
// let p4 = Promise.reject();
// let onFinally = function () {
//   setTimeout(console.log, 0, 'Finally!')
// }
// p3.finally(onFinally); // Finally 
// p4.finally(onFinally); // Finally

// let p1 = Promise.resolve();
// p1.then(() => console.log('p1.then() onResolved'));
// console.log('p1.then() returns');
// let p2 = Promise.reject();
// p2.then(null, () => console.log('p2.then() onRejected'));
// console.log('p2.then() returns');
// let p3 = Promise.reject();
// p3.catch(() => console.log('p3.catch() onRejected'));
// console.log('p3.catch() returns');
// let p4 = Promise.resolve();
// p4.finally(() => console.log('p4.finally() onFinally'));
// console.log('p4.finally() returns');

// p1.then() returns 
// p2.then() returns 
// p3.catch() returns 
// p4.finally() returns 
// p1.then() onResolved 
// p2.then() onRejected 
// p3.catch() onRejected 
// p4.finally() onFinally

let p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log('p1 excutor')
    resolve()
  }, 1000);
})

p1.then(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('p2 excutor')
      resolve()
    }, 1000);
  })
})
  .then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('p3 excutor')
      }, 1000);
    })
  })