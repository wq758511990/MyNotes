/**
 * 布尔值
 */

let isDone: boolean = false

// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
let createdByNewBoolean: boolean = new Boolean(1)
// 不能将类型“Boolean”分配给类型“boolean”。
//   “boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”

// 应该这样
let createdByNewBoolean_1: Boolean = new Boolean(1)

// 或者这样 创建于一个boolean对象
let createdByNewboolean: boolean = Boolean(1)


/**
 * number
 */
let decLiteral: number = 8
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

/**
 * 字符串
 */

let myName: string = 'www'
let sentence: string = `hello , my name is ${myName}`

/**
 * 空值
 */

// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：

function consoleName(): void {
    console.log('my name is xxx')
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let voidNum: void = undefined

/**
 * null 和 undefined
 */

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

let u: undefined = undefined
let n: null = null

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

let a: number = u

// 而 void 类型的变量不能赋值给 number 类型的变量：

let v: void = undefined
a = v // 不能将类型“void”分配给类型“number”。

/**
 * 任意值
 */

// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
let s: string = 's'
s = 2 // 不能将类型“2”分配给类型“string”。

// 但如果是 any 类型，则允许被赋值为任意类型。
let anyString: any = 'sss'
anyString = 3

// 在任意值上访问任何属性都是允许的：
anyString.a
anyString.b
anyString.c

// 也可以调用任意方法
anyString.d()
anyString.f()

// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

//  变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let b
b.a
b.b
b.c()

