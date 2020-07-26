testName()
function testName() {
    console.log(testName.name)
}

// testName1()
// var testName1 = function() {
//     console.log('1')
// }

// 关于函数声明，它的一个重要特征就是函数声明提升（function declaration hoisting），意思是在执行
// 代码之前会先读取函数声明。这就意味着可以把函数声明放在调用它的语句后面。
// 表达式则不行

//不要这样做！ 
if (condition) {
    function sayHi() {
        alert("Hi!");
    }
} else {
    function sayHi() {
        alert("Yo!");
    }
}

//可以这样做
var sayHi;
if (condition) {
    sayHi = function () {
        alert("Hi!");
    };
} else {
    sayHi = function () {
        alert("Yo!");
    };
}