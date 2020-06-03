// toFixed()方法会按照指定的小数位返回数值的字符串表示，例如：
// var num = 10.005; 
// console.log(num.toFixed(2)); //"10.00"

// 能够自动舍入

// charAt()和 charCodeAt()。
// charAt(), 返回字符串中， 某个位置的字符
// charCodeAt('a') 返回 95  即 字符对应的ASCII值
// fromCharCode()方法， 与charCodeAt 相反， fromCharCode(95) 返回'a'
// concat 也可以用来操作字符串， 返回拼接后的字符串，原字符串不受影响

// var stringValue = "hello world"; 
// console.log(stringValue.slice(3)); //"lo world" 
// console.log(stringValue.substring(3)); //"lo world" 
// console.log(stringValue.substr(3)); //"lo world" 
// console.log(stringValue.slice(3, 7)); //"lo w" 
// console.log(stringValue.substring(3,7)); //"lo w" 
// console.log(stringValue.substr(3, 7)); //"lo worl"

// console.log(window.isNaN)

// encodeURI()和 encodeURIComponent()方法对应的两个方法分别是 
// decodeURI()和 decodeURIComponent()

// eval()方法
// 现在，我们介绍最后一个——大概也是整个 ECMAScript 语言中最强大的一个方法：eval()。eval()
// 方法就像是一个完整的 ECMAScript 解析器，它只接受一个参数，即要执行的 ECMAScript（或 JavaScript）
// 字符串。看下面的例子：

eval("console.log('hi')");

// 当解析器发现代码中调用 eval()方法时，它会将传入的参数当作实际的 ECMAScript 语句来解析，
// 然后把执行结果插入到原位置。通过 eval()执行的代码被认为是包含该次调用的执行环境的一部分，
// 因此被执行的代码具有与该执行环境相同的作用域链。这意味着通过 eval()执行的代码可以引用在包
// 含环境中定义的变量

eval("function sayHi() { console.log('hi, man'); }");
sayHi();

// var global = function () {
//     console.log(this)
//     return this;
// }();

var global1 = function() {
    console.log(this)
}

global1()
// global1.call(window)