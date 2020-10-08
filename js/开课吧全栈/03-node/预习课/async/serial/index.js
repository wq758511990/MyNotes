const logTime = (name) => {
    console.log('Log...' + name + ' ' + new Date().toLocaleString())
}

const callback = () => {
    setTimeout(() => {
        logTime(1)
        setTimeout(() => {
            logTime(2)
        }, 100);
    }, 100);
}

const promise = (name, delay = 200) => new Promise((resolve, reject) => {
    setTimeout(() => {
        logTime(name)
        resolve()
    }, delay);
})

const promiseFunc = () => {
    promise('promise 1')
        .then(() => { promise('promise 2') })
        .then(() => { promise('promise 3') })
}

const asyncawait = async() => {
    await promise('promise 11')
    await promise('promise 22')
    await promise('promise 33')
}

module.exports = {
    callback,
    promiseFunc,
    asyncawait
}