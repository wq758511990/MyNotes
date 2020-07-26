var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // 
}
handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('hello_1'), 'mouseover'); // 这里报错 因为EventNames 里面没有 mouseover
// 注意，类型别名与字符串字面量类型都是使用 type 进行定义。
// 元祖
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
var tom = ['tom', 98];
tom[0] = 'sam';
tom[1] = 7;
// 均可正常访问 但是如果要直接对元祖进行复制，则需要对元祖的每个值进行重新复制
tom = ['sam', 13];
// tom = ['sam'] // 这样则会报错
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
tom.push('kite');
// tom.push(true)
// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
var days;
(function (days) {
    days[days["Sun"] = 7] = "Sun";
    days[days["Mon"] = 1] = "Mon";
    days[days["Tue"] = 2] = "Tue";
    days[days["Wed"] = 3] = "Wed";
    days[days["Thu"] = 4] = "Thu";
    days[days["Fri"] = 5] = "Fri";
    days[days["Sat"] = 6] = "Sat";
})(days || (days = {}));
;
// 也可以手动给enum赋值 -- 下标
days[0] == 'Sun'; // true
days['Sun'] == 0; // true
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
// 比如上面的sun = 3 之后从1开始递增，又出现 = 3 的情况，尽量避免
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：
// 比如 mon = 1.5 , 之后 tue 为 2.5 3.5 以此类推
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = "blue".length] = "blue";
})(colors || (colors = {}));
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
// 假如包含了计算成员，则会在编译阶段报错：
var directions_3 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var directions_6 = [Directions_4.Up, Directions_4.Down, Directions_4.Left, Directions_4.Right];
var directions_4 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// TypeScript 中类的用法
// public private 和 protected
// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
var Animal_3 = /** @class */ (function () {
    function Animal_3(name) {
        this.name = name;
    }
    return Animal_3;
}());
var a1 = new Animal_3('jack');
console.log(a1.name);
a1.name = 'tom';
console.log(a1.name);
var Animal_4 = /** @class */ (function () {
    function Animal_4(name) {
        this.name = name;
    }
    return Animal_4;
}());
var a2 = new Animal_4('Tom');
console.log(a2.name);
// a2.name = 'jd'
// 抽象类
// abstract 用于定义抽象类和其中的抽象方法。
// 首先，抽象类是不允许被实例化的
var Animal_5 = /** @class */ (function () {
    function Animal_5(name) {
        this.name = name;
    }
    return Animal_5;
}());
// 其次，抽象类中的抽象方法必须被子类实现：
var Cat_1 = /** @class */ (function (_super) {
    __extends(Cat_1, _super);
    function Cat_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat_1.prototype.sayHi = function () {
        console.log("Meow, my name is " + this.name);
    };
    return Cat_1;
}(Animal_5));
