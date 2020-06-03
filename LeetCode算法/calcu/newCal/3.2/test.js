// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1')
//     resolve('resolve1')
// })

// console.log('1', promise1);
// console.log('2', promise1.then(res => {
//     console.log(res)
// }));

// promise1.then((res) => {
//     console.log(res)
//     console.log('2', promise1)
// })



// const promise2 = new Promise((resolve, reject) => {
//     console.log('starting....')
//     setTimeout(() => {
//         resolve('ending.....')
//     }, 1500);
// })


// promise1.then(res => {
//     console.log(res)
//     console.log('5', promise2)
// })

let test = new Promise((resolve, reject) => {
    let random = Math.random()
    if (random > 0.5) {
        resolve('大于0.5')
    } else {
        reject('小于等于0.5')
    }
})

let p = test.then((result) => {
    console.log(result)
    return result
}).catch((result) => {
    console.log(result)
    return result
}).then((result) => {
    console.log(result)
    return result
}).then((result) => {
    console.log('last', result)
})

console.log(p)
