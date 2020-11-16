function fn(num) {
  let p = num;
  return function () {
    console.log("p", (p += 2));
  };
}

function fn1(a, b) {
  a + b;
}

function fn2(a) {
  return function (b) {
    a + b;
  };
}

function fn3(b) {}

let next_fn = fn(6);
next_fn();
next_fn();
