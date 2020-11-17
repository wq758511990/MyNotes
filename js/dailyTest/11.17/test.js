let num = 0
outermost: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outermost
    }
    num++
  }
}
console.log(num) // 55

let num_1 = 0
outermost_1: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outermost_1
    }
    num_1++
  }
}
console.log(num_1) // 95
