function outputNumbers(count) {
    for (var i = 0; i < count; i++) {
        console.log(i);
    }

    var i; //重新声明变量
    console.log(i); //计数, 这里依然可以拿到i的值， 此时为5
}

// 匿名函数可以用来模仿块级作用域并避免这个问题。

// function test() {
//     console.log('123')
// }() // 这样会出错，声明函数不能直接跟()

(function test(count) { //这样就可以
    for (var i = 0; i < count; i++) {
        console.log(i);
    }

    console.log(i); //
})(5)

// 改造函数
function outputNumbers(count) {
    (function () {
        // 这里相当于块级作用域，
        for (var i = 0; i < count; i++) {
            console.log(i);
        }
    })()

    // 此时外部无法访问i, 报错 i is not defined
    console.log(i); //计数, 这里依然可以拿到i的值， 此时为5
}
outputNumbers(5)