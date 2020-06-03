var person = {};
Object.defineProperty(person, "name", {
    writable: false,  // 不可修改
    //  configurable: false, // 不能从对象中删除属性
    // 一旦把属性定义为不可配置的，
    // 就不能再把它变回可配置了。此时，再调用 Object.defineProperty()方法修改除 writable 之外
    // 的特性，都会导致错误：

    value: "Nicholas"
});
console.log(person.name); //"Nicholas" 
person.name = "Greg";
console.log(person.name); //"Nicholas"


// 访问器属性不包含数据值；它们包含一对儿 getter 和 setter 函数（不过，这两个函数都不是必需的）。
// 在读取访问器属性时，会调用 getter 函数，这个函数负责返回有效的值；

var a = {}
Object.defineProperty(a, "b", {
    set: function (newValue) {
        console.log("你要赋值给我,我的新值是" + newValue);
    },
    get: function () {
        console.log("你取我的值")
        return 2 //注意这里，我硬编码返回2
    }
})
a.b = 1 //打印 你要赋值给我,我的新值是1
console.log(a.b)    //打印 你取我的值
//打印 2    注意这里，和我的硬编码相同的


// var book = {
//     year: 2004,
//     edition: 1
// }

// Object.defineProperty(book, 'year', {
//     set(newVal) {
//         console.log('was changed')
//         if(newVal > 2004) {
//             this.edition = newVal - 2004
//         }
//     },
//     get() {
//         console.log('was fetched')
//         return 1
//     }
// })

// book.year = 2010
// console.log(book.edition)
// console.log(book.year)

var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function () {
        console.log('get')
        return this._year;
    },
    set: function (newValue) {
        console.log('was set')
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
console.log(book.edition); //2
console.log(book.year); //2


// defineProperties
var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },

    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

