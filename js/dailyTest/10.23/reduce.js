const arr = [1, 2, 3, 4, 5]
const reducer = (a, b) => {
    console.log('a', a)
    console.log('b', b)
    return a + b
}

console.log(arr.reduce(reducer))