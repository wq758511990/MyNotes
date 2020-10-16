async function delay() {
  const res = await delay1000ms()
  console.log(res)
}

function delay1000ms() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1000 passed')
    }, 1000);
  })
}

function init() {
  delay()
  console.log('123') // 先打印123 async 内部是同步(也不能说同步) async 之外调用是异步
}

init()