/**
 * 类型推论
如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
 */

let str = "ddd"
str = 3
// 不能将类型“3”分配给类型“string”。

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

let anyType
anyType = 3
anyType = '3'



/**
 * 联合类型
联合类型（Union Types）表示取值可以为多种类型中的一种。
 */

// 只可以是字符串或者数字
let unionType: string | number = '3'
unionType = 3
unionType = true

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

function getLength(something: string | number): number {
    return something.length
}

// 上例中，length 不是 string 和 number 的共有属性，所以会报错。
// 访问number和string公有的属性是没问题的

let myFavoriteNumber: string | number
myFavoriteNumber = '3'
console.log(myFavoriteNumber.length)
myFavoriteNumber = 3
console.log(myFavoriteNumber.length) // 此时是number类型，不具有length属性



/**
 * 对象的类型——接口
 */

// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

interface Person {
    name: string,
    age: number
    xxx?: boolean, // 这是可选属性， 可以不存在
    [propName: string]: any, // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
    readonly id?: number // 只读属性，只能在创建实例的时候被赋值，之后无法通过tom.id = 4 来修改它
}
// 定义了任意属性，就可以添加任意属性， 但是所有确定属性和可选属性的类型都必须是任意属性的子集，并且一个接口中只能有一个任意属性
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
let tom: Person = {
    name: "www",
    age: 13,
    gender: 3,
    sex: 'female',
    ddd: 'xxx',
    // id: 3
}
tom.id = 4
// Person这个接口定义了对象的形状，即这个对象中有name, age 属性， tom 是对这个接口实例化的表现
// 正常来讲不允许比接口多某些或者少某些变量或者方法




/**
 * 数组的类型
 */

let fibnacci: number[] | string[] = [3]
fibnacci.push('3')

// 数组中不允许出现其他类型的值，除非是any

// 也可以通过数组泛型来定义数组
let fibnacci_1: Array<number> = [3]

function sum(): void {
    let args: number[] = arguments
}

// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function sum_1(): void {
    let args: {
        [index: number]: number,
        length: number;
        callee: Function;
    } = arguments
}

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum_2(): void {
    let args: IArguments = arguments
}





/**
 * 函数的类型
 */

// 在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：

// 函数声明（Function Declaration）
function sum_3(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

function sum_4(x: number, y: number, z?: number): number { //也有可选参数
    return x + y
}

sum_4(1, 2, 3) // 不允许传入多余参数

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

let mySum_1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
} // 个人不建议用函数表达式

// 用接口定义函数的形状
// 我们也可以使用接口的方式来定义一个函数需要符合的形状：

interface searchFunc {
    (source: string, substr: string): boolean // 返回的是一个布尔值
}

let mySearch: searchFunc
mySearch = function (source: string, substr: string) {
    return source.search(substr) !== -1
}

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
function mysum_2(x: number, y: number, z?: number, k: number): number { // 必选参数不能位于可选参数后。
    return x + y
}

// 参数默认值§
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数

function buildName(firstName: string, lastName: string = 'cat'): string {
    return firstName + lastName
}

// 剩余参数
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

function restItems(x: number, ...items): void {
    console.log(items)
}

restItems(1, 2, 3, 4, 5, 6)

// 重载§
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 前两次是函数的定义，后面是函数的实现
// 然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

reverse(3)
reverse('3')

// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。




/**
 * 类型断言
 */

// 类型断言（Type Assertion）可以用来手动指定一个值的类型。


// 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：
interface Cat {
    name: string,
    run(): void
}

interface Fish {
    name: string,
    swim(): void
}

function getName(animal: Cat | Fish): string {
    return animal.name
}

// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

function isFish(animal: Cat | Fish): boolean {
    if (typeof animal.swim == 'function') {
        return true
    }
    return false
}

// 上面的例子中，获取 animal.swim 的时候会报错。 此时可以使用类型断言，将 animal 断言成 Fish, 或者 Cat

function isCat(animal: Cat | Fish): boolean {
    if (typeof (animal as Cat).run == 'function') {
        return true
    }
    return false
} // 这里把animal断言成Cat，故而就可以访问animal.run

// 将一个父类断言为更加具体的子类§
// 当类之间有继承关系时，类型断言也是很常见的：

class ApiError extends Error {
    code: number = 0
}

class HTTPError extends Error {
    statusCode: number = 200
}

function isApiError(error: Error): boolean {
    if (typeof (error as ApiError).code == 'number') {
        return true
    }
    return false
}

// 将任何一个类型断言为 any

let foo: number = 1
foo.length // 这种情况下会报错，foo中不存在length属性，因为他是number

// 但是某些情况下我们确认不会报错，比如 
window.foo = 1 // 我们要在window上添加一个属性foo，这时候就可以把window断言为any类型
(window as any).foo = 1

// 需要注意的是，将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。

// 将 any 断言为一个具体的类型§

function getCacheData(key: string): any {
    return (window as any).cache[key];
}

// 那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：

interface Cat {
    name: string,
    run(): void
}

const tom_1 = getCacheData('tom') as Cat
tom.run()



// 类型断言的限制

// 从上面的例子中，我们可以总结出：

// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型

// 那么类型断言有没有什么限制呢？是不是任何一个类型都可以被断言为任何另一个类型呢？
// 答案是否定的——并不是任何一个类型都可以被断言为任何另一个类型。
// 具体来说，若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。

interface Animal {
    name: string
}

interface Cat extends Animal {
    run(): void
}

function testAnimal(animal: Animal) {
    return (animal as Cat)
}

function testCat(cat: Cat) {
    return (cat as Animal);
}
// 可以得到
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可


// 双重断言§
// 既然：

// 任何类型都可以被断言为 any
// any 可以被断言为任何类型

interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat_1(cat: Cat) {
    return (cat as any as Fish);
}

// 但是最好别用，八成是错的


// 所以类型断言不是类型转换，它不会真的影响到变量的类型。
// 若要进行类型转换，需要直接调用类型转换的方法：


// 类型断言 vs 类型声明

interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom_2 = animal as Cat;
let tom_3: Cat = animal;

// animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
// animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
// 这里Cat不兼容Animal

// 库的使用场景主要有以下几种：

// 全局变量：通过 <script> 标签引入第三方库，注入全局变量
// npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
// UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入
// 直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构
// 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
// 模块插件：通过 <script> 或 import 导入后，改变另一个模块的结构

Math.pow(10, '2')
// pow(x: number, y: number): number;
