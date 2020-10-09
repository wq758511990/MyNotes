// const add = (x, y) => x + y
// const square = z => z * z

// const compose = (fn1, fn2) => (...args) => fn2(fn1(...args)) // 组合两个函数
// const compose = (...[first, ...other]) => (...args) => {
//     // 组合多个函数
//     let ret = first(...args)
//     other.forEach(fn => {
//         ret = fn(ret)
//     })
//     return ret
// }
// const fn = (x, y) => square(add(x, y))

// console.log(fn(1, 2))
// const fn = compose(add, square)

function compose(middlewares) {
    return function() {
        return dispatch(0) // 返回最外层
        function dispatch(i) { // i为middlewares下标
            let fn = middlewares[i]
            if (!fn) {
                // 不存在 返回一个空承诺
                return Promise.resolve()
            }
            // 存在则返回fn()执行结果
            return Promise.resolve(
                fn(function next() {
                    // promise完成后再执行下一个
                    // 返回下一个执行承诺
                    return dispatch(i + 1)
                })
            )
        }
    }
}


async function fn1(next) {
    console.log("fn1");
    await next();
    console.log("end fn1");
}
async function fn2(next) {
    console.log("fn2");
    await delay();
    await next();
    console.log("end fn2");
}
function fn3(next) {
    console.log("fn3");
}
function delay() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, 2000);
    })
}

const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();