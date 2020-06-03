console.log(sum(10, 10));
// 函数声明
function sum(num1, num2) {
    return num1 + num2;
}

// 以上代码可以正常运行， 原因是因为，
// 因为在代码开始执行之前，解析器就已经通过一个名为函数声明提升
// （function declaration hoisting）的过程，读取并将函数声明添加到执行环境中。对代码求值时，JavaScript
// 引擎在第一遍会声明函数并将它们放到源代码树的顶部。

// 也就是把function sum 放到顶部执行了


// console.log(sum1(10, 10))
// 函数表达式
var sum1 = function (num1, num2) {
    return num1 + num2
}

// 这样子则会报错, sum1 is not a function, 因为调用的时候尚未声明

function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

var data = [{ name: "Zachary", age: 28 }, { name: "Nicholas", age: 29 }];
data.sort(createComparisonFunction("name"));
console.log(data[0].name); //Nicholas 
data.sort(createComparisonFunction("age"));
console.log(data[0].name); //Zachary


// 5.5.5 函数的属性和方法
// 前面曾经提到过，ECMAScript 中的函数是对象，因此函数也有属性和方法。每个函数都包含两个
// 属性：length 和 prototype。其中，length 属性表示函数希望接收的命名参数的个数，如下面的例
// 子所示。

var test = { a: 1, b: 2, c: 3 }
for (key in test) {
    console.log(key, test[key])
}



window.color = "red";
var o = { color: "blue" };
function sayColor() {
    console.log(this.color);
}
sayColor(); //red 
sayColor.call(this); //red 
sayColor.call(window); //red 
sayColor.call(o);

// call 后面可以传入要调用函数的对象，改变作用域（扩充函数赖以运行的作用域）


