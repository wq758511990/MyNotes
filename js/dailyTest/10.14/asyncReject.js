function callback(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 1) {
        resolve(1)
      } else {
        reject(2)
      }
    }, 1000);
  })
}

async function testReject() {
  res = await callback(2).catch((e) => {console.log('e', e)})
  console.log('res', res)
}

testReject()