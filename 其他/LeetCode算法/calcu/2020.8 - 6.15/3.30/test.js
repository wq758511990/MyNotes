const createBase = (firstNum) => (secondNum) => {
  return firstNum + secondNum
}

const addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(15))
