function* generatorFn() {
  yield 1
  yield 2
  yield 3
}

for (let num of generatorFn()) {
  console.log(num)
}

function* ntimes(n) {
  let i = 10
  while (n--) {
    yield i++
  }
}

for (let i of ntimes(3)) {
  console.log(i)
}
