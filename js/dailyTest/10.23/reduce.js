// const arr = [1, 2, 3, 4, 5]
// const reducer = (a, b) => {
//     console.log('a', a)
//     console.log('b', b)
//     return a + b
// }

// console.log(arr.reduce(reducer))

function f1(args) {
    console.log('f1', args)
    return args
}

function f2(args) {
    console.log('f2', args)
    return args
}

function f3(args) {
    console.log('f3', args)
    return args
}

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    } else if (funcs.length === 1) {
        return funcs[0]
    } else {
        return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }
}

let res = compose(f1, f2, f3)('omg')
console.log('res', res)