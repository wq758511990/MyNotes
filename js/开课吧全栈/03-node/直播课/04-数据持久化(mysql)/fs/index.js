const fs = require('fs')
const readline = require('readline') // 读取命令行

function get(key) {
    fs.readFile('./db.json', (err, data) => {
        // 读取的data是二进制buffer
        const json = JSON.parse(data)
        console.log(json[key])
    })
}

function set(key, value) {
    console.log('set')
    fs.readFile('./db.json', (err, data) => {
        // 可能是空数据
        const json = data ? JSON.parse(data) : {}
        json[key] = value
        // 重新写入数据
        fs.writeFile('./db.json', json, (err, data) => {
            if (err) console.log(err)
            else console.log('写入成功')
        })
    })
}

// 命令行接口部分
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(input) {
  const [op, key, value] = input.split(" ");
  if (op === 'get') {
    get(key)
  } else if (op === 'set') {
    set(key, value)
  } else if(op === 'quit'){
    rl.close();
  }else {
    console.log('没有该操作');
  }
});

rl.on("close", function() {
  console.log("程序结束");
  process.exit(0);
});

rl.close('close', function() {
    process.exit()
})