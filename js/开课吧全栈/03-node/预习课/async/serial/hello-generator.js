function* generator() {
    // yield函数 相当于迭代器
    // 可以通过 for (const [key, value] of generator()) 访问到
    console.log('one')
    yield '1'
    console.log('two')
    yield '2'
    console.log('three')
    yield '3'
}

for (const [key, value] of generator()) {
    console.log('key', key)
    console.log('value', value)
}
 
// const f = generator()
// const one = f.next() // {value: '1', done: 'false'}
// console.log(one)
// const two = f.next()
// console.log(two)
// const three = f.next()
// console.log(three)
// const four = f.next()
// console.log(four) // {value: undefined, done: 'true'}