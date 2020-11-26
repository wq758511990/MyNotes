
function callback (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 1) {
        resolve(1);
      } else {
        reject("error");
      }
    });
  });
}

async function testReject () {
  res = await callback(2).catch((e) => {
    console.log("e", e);
  });
  console.log("res", res);


  // try {
  //   // res = await callback(2)
  //   throw 'oh no'
  // } catch (err) {
  //   console.log('err', err)
  // }
}

testReject();
