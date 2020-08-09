function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 1000);
    })
}

async function delay1000() {
    res = await delay() // res是promise返回的 数据, 且delay必须返回一个promise对象
    console.log(res)
    console.log('delay done')
}

delay1000()
