const fs = require('fs')
const https = require("https")
const path = require("path")
const first = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('first')
    }, 500);
})

const second = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('second')
    }, 500);
})

// Promise.all([first, second]).then(([res1, res2]) => {
//     console.log(res1)
//     console.log(res2)
// })


async function third() {
    try {
        const value = await second
        const value2 = await first
        return value
    }
    catch (e) {
        console.log(e)
    }
}

// third().then((data) => {
//     console.log(data)
// })

options = {
    host: "baidu.com",
    method: 'GET'
}

// const req = https.request(options, res => {
//     console.log(`statusCode:${res.statusCode}`)
// })

// req.end()

options_post = {
    host: "baidu.com",
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    }
}


// fs.readFile("./1.txt", 'utf8', (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

try {
    const data = fs.readFileSync("1.txt", 'utf8')
    console.log(data)
} catch (e) {
    console.log(e)
}
const content = '\n321'

// fs.writeFile("1.txt", content, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
// })

// try {
//     const data = fs.writeFileSync("1.txt", content, {flag: 'a+'}) // {flag: 'a+'} 追加内容而非代替
// } catch(e) {
//     console.log(e)
// }

try {
    const data = fs.appendFileSync("1.txt", content)
} catch(e) {
    console.log(e)
}

// 各种模式
// r+ 可读可写
// w+ 可读可写，光标在开头，若文件不存在则创建
// a 可写，光标在结尾，文件不存在则创建
// a+ 可读可写， 光标在结尾， 文件不存在则创建

