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


// 7.2.1 闭包与变量
function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            // 这里由于该函数中自身没有i， 则会去上一个作用域中寻找i， 上一个作用域中i最后的值为10， 故而，result中每个函数返回值都是10
            return i;
        };
    }
    return result;
}

// 这个函数会返回一个函数数组。表面上看，似乎每个函数都应该返自己的索引值，即位置 0 的函数
// 返回 0，位置 1 的函数返回 1，以此类推。但实际上，每个函数都返回 10。因为每个函数的作用域链中
// 都保存着 createFunctions() 函数的活动对象，所以它们引用的都是同一个变量 i 。 当
// createFunctions()函数返回后，变量 i 的值是 10，此时每个函数都引用着保存变量 i 的同一个变量
// 对象，所以在每个函数内部 i 的值都是 10。但是，我们可以通过创建另一个匿名函数强制让闭包的行为
// 符合预期，如下所示。
function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                return num;
            };
        }(i);
    }
    return result;
}

console.log(createFunctions()[0]())


var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        // var that = this 保存当前this指向，之后用that调用该this
        return function () {
            return this.name
            // return that.name;
        };
    }
};

console.log(object.getNameFunc()())


var element = document.getElementById("someElement");
element.onclick = function () {
    alert(element.id);
}; 
}
// 以上代码创建了一个作为 element 元素事件处理程序的闭包，而这个闭包则又创建了一个循环引
// 用（事件将在第 13 章讨论）。由于匿名函数保存了一个对 assignHandler()的活动对象的引用，因此
// 就会导致无法减少 element 的引用数。只要匿名函数存在，element 的引用数至少也是 1，因此它所
// 占用的内存就永远不会被回收。不过，这个问题可以通过稍微改写一下代码来解决，如下所示。
function assignHandler() {
    var element = document.getElementById("someElement");
    var id = element.id;

    element.onclick = function () {
        alert(id);
    };

    element = null;
}
// 在上面的代码中，通过把 element.id 的一个副本保存在一个变量中，并且在闭包中引用该变量消
// 除了循环引用。但仅仅做到这一步，还是不能解决内存泄漏的问题。必须要记住：闭包会引用包含函数
// 的整个活动对象，而其中包含着 element。即使闭包不直接引用 element，包含函数的活动对象中也
// 仍然会保存一个引用。因此，有必要把 element 变量设置为 null。这样就能够解除对 DOM 对象的引
// 用，顺利地减少其引用数，确保正常回收其占用的内存。