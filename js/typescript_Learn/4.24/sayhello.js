function sayHello(person) {
    return 'sayHello ' + person + '!';
}
var user = 'Tom';
// let testArr = [1, 2, 3] //Argument of type 'number[]' is not assignable to parameter of type 'string'.
// 但是依然会生成js文件
console.log(sayHello(user));
