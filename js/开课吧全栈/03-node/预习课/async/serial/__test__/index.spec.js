const { callback, promiseFunc, asyncawait } = require("../index")

// test('callback', done => {
//     callback()
//     // 延迟1s
//     setTimeout(() => {
//         done()
//     }, 1000);
// })

// test('promise', done => {
//     promise()
//     // 延迟1s
//     setTimeout(() => {
//         done()
//     }, 1000);
// })

test('asyncawait', done => {
    asyncawait()
    // 延迟1s
    setTimeout(() => {
        done()
    }, 1000);
})