/**
 * 类型别名
 */
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
    if (typeof n == 'string') {
        return n
    } else {
        return n()
    }
}

/**
 * 字符串字面量类型
 */

type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, events: EventNames) {
    //
}

handleEvent(document.getElementById('root'), 'click')
handleEvent(document.getElementById('root'), 'dbclick')


/**
 * 元组
 */

// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 这一点和py不一样
let Tom: [String, Number] = ['tom', 25]

// 可以通过Tom[0] Tom[1]来读取或者赋值变量
// 但是如果要用Tom = ['sam'] 的方法来修改，则需要指定每一个值
Tom = ['sam'] // Property '1' is missing in type '[string]' but required in type '[String, Number]'.
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
Tom.push('sam')
Tom.push(false) // 类型“false”的参数不能赋给类型“String | Number”的参数

/**
 * 枚举
 */

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
enum Days { Sun, Mon, Tues, Wed, Thur, Fri, Sat }
console.log(Days['Sun'])

// 也可以手动赋值
enum Days_1 { Sun = 7, Mon = 1, Tues, Wed, Thur, Fri, Sat } // 没有指定会从指定赋值的地方开始递增，这里就是在Mon = 1 之后 Tues = 2

// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查
enum Days_2 { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S' }

// 上面都是常数项枚举

// 还可以是计算所得项
enum Color { Red, Green, Blue = 'blue'.length } // 这样不会报错，但是计数所得项后面不能再加入未手动赋值的项

enum Color_1 { Red, Green, Blue = 'blue'.length, Orange } // 枚举成员必须具有初始化表达式。


// 常数枚举
// 常数枚举是使用 const enum 定义的枚举类型
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right]
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
// 假如包含了计算成员，则会在编译阶段报错：
const enum Color_2 { Blue = 'blue'.length } // const enum member initializers can only contain literal values and other computed enum values.


// 外部枚举

// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：

declare enum Directions {
    Up,
    Down,
    Left,
    Right
}


class Animal {
    public name
    constructor(name) {
        // 要声明name才能写this.name
        this.name = name
    }
    sayHi() {
        return `my name is ${this.name}`
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name) // 调用父类的constructor
    }

    sayHi() {
        return `Meow, It's ${this.name}`
    }
}

let cat = new Cat('tom')
cat.sayHi()

//TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal_1 {
    protected name
    public constructor(name) {
        this.name = name
    }
}

let a = new Animal_1('jack')
a.name // 属性“name”为私有属性，只能在类“Animal_1”中访问。ts(2341)
// 如果是procted 属性“name”受保护，只能在类“Animal_1”及其子类中访问。

// 需要注意的是，TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性。

// private 修饰的方法子类也不能访问
class Cat_1 extends Animal_1 {
    public constructor(name) {
        super(name)
        console.log(this.name) // 属性“name”为私有属性，只能在类“Animal_1”中访问。
    }
}
// 而如果是用 protected 修饰，则允许在子类中访问：

// 当构造函数修饰为 private 时，该类不允许被继承或者实例化：

// 当构造函数修饰为 protected 时，该类只允许被继承， 不允许自身被实例化
// 一般情况下构造函数用public 即自身可以被实例化也可以被继承




// 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
class Animal_3 {
    readonly name
    public constructor(name) {
        this.name = name
    }
}

let b = new Animal_3('tom')
b.name = 3 // Cannot assign to 'name' because it is a read-only property.ts(2540)
// 注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面



// 抽象类

// abstract 用于定义抽象类和其中的抽象方法。
// 什么是抽象类？
// 首先，抽象类是不允许被实例化的：

abstract class Animal_4 {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    public abstract sayHi() //方法“sayHi”不能具有实现，因为它标记为抽象。
}
let c = new Animal_4() // 无法创建抽象类的实例。ts(2511)
// 其次，抽象类中的抽象方法必须被子类实现：

class Cat_2 extends Animal_4 {
    public sayHi(): void {
        console.log(`${this.name} is saying`)
    }
}

let d: Animal_4 = new Cat_2('jack')
d.sayHi()


/**
 * 类与接口
 */

// 实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
// 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

// 一个类可以实现多个接口：

interface Alarm {
    alert(): void
}
interface Light {
    lighton(): void
    lightoff(): void
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
    alert(): void {

    }
}

class Car implements Alarm, Light {
    alert(): void { }
    lighton(): void { }
    lightoff(): void { }
}



// 接口继承接口

interface inter1 {
    inter1(): void
}

interface inter2 extends inter1 {
    inter2(): void
    inter3(): void
}

// 接口继承类

// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：
// 本质跟接口继承接口一样，为了不混淆就不管

// 一般常见就是类实现接口，接口继承接口，类继承类



/**
 * 泛型
 */

function createArray<T>(length: number, value: T): Array<T> {
    // 这里的T可以为任意类型， 但是一旦指定就只能是那个类型
    // 例如下面createArray<string> 就指定了这次调用的时候T为string， 故而value也是string， 输出的数组也是string类型
    let result: T[] = []
    for (var i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

createArray<string>(3, 'x')
createArray<number>(3, 5)

// 多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

swap<string, number>(['seven', 7])

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：

function loggingIdentity<T>(args: T): T {
    console.log(args.length) // 类型“T”上不存在属性“length”。ts(2339) 尚不确定T是什么类型
    return
}

// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：

interface LengthWise {
    length: number
}

function loggingIdentity_1<T extends LengthWise>(args: T): T { // 含有LengthWise中定义的属性才能传进来
    console.log(args.length)
    return
}

loggingIdentity_1(8) // 类型“8”的参数不能赋给类型“LengthWise”的参数。ts(2345)

// 多个类型参数之间也可以互相约束：

function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id]
    }
    return target
}

let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });

interface SearchFunc {
    search(source: string, substring: string): boolean
}

interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>
}

let createArray_1: CreateArrayFunc<any>

createArray_1 = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray_1(3, 'x'); // ['x', 'x', 'x']

// 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。
// 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

function defaultType<T = string>(length: number, value: T): T {
    return value
}


/**
 * 声明合并
 */

// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：

// 之前学习过，我们可以使用重载定义多个函数类型：
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 接口的合并§

interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

// 相当于：
interface Alarm {
    price: number;
    weight: number;
}

// 注意，合并的属性的类型必须是唯一的：
