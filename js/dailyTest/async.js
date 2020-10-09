function settime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log('321')
    }, 2000)
  })
}
function setime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log('456')
    }, 2000)
  })
}
async function testAsync() {
  await settime()
  await setime()
  console.log('123')
}

testAsync()