function test () {
  var a
  for (a = 0; a < 5; a++) {
    // setFunc(a)

    // (function (a) {
    //   setTimeout(() => {
    //     console.log(a)
    //   });
    // })(a)

    // setTimeout((a) => {
    //   console.log(a)
    // }, 0, a);
  }
}

function setFunc (num) {
  setTimeout(() => {
    console.log(num)
  });
}

test()

