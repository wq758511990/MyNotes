// 阶乘函数
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * factorial(num - 1); 报错 factorial is not a function
        return num * arguments.callee(num - 1);
    }
}

console.log(factorial(5))

// 下面这种情况会被错，原因是 factorial被指向为null，但是 anotherFactorial调用的时候又调用了factorial(), 所以报错
// 解决方法是 return num * arguments.callee(num - 1)  arguments.callee 是一个指向正在执行的函数的指针，

// 在编写递归函数时，使用 arguments.callee 总比使用函数名更保险。
var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(5)); //出错！ 


// 但在严格模式下，不能通过脚本访问 arguments.callee，访问这个属性会导致错误。不过，可
// 以使用命名函数表达式来达成相同的结果。例如：

// 这样即使factorial 指向了 null， anotherFactorial 依然可以调用， 因为f依然有效
var factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});

