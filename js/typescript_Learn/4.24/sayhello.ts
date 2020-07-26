function sayHello(person: string) {
    return 'sayHello ' + person + '!'
}

let user = 'Tom'
// let testArr = [1, 2, 3] //Argument of type 'number[]' is not assignable to parameter of type 'string'.
// 但是依然会生成js文件
// TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
console.log(sayHello(user))