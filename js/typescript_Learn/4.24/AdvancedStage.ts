type Name = string
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}


type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
    // 
}


handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('hello_1'), 'mouseover'); // 这里报错 因为EventNames 里面没有 mouseover


// 注意，类型别名与字符串字面量类型都是使用 type 进行定义。



// 元祖
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

let tom: [string, number] = ['tom', 98]

tom[0] = 'sam'
tom[1] = 7

// 均可正常访问 但是如果要直接对元祖进行复制，则需要对元祖的每个值进行重新复制
tom = ['sam', 13]

// tom = ['sam'] // 这样则会报错


// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
tom.push('kite')
// tom.push(true)


// 枚举

// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };

// 也可以手动给enum赋值 -- 下标
days[0] == 'Sun' // true
days['Sun'] == 0 // true


// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
// 比如上面的sun = 3 之后从1开始递增，又出现 = 3 的情况，尽量避免
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：
// 比如 mon = 1.5 , 之后 tue 为 2.5 3.5 以此类推


enum colors { red, green, blue = "blue".length }

// 上面的例子不会报错，但是如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
// enum colors_1 {red = "red".length, blue, green}


// 常数枚举是使用 const enum 定义的枚举类型：
const enum Directions_2 {
    Up,
    Down,
    Left,
    Right
}
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
// 假如包含了计算成员，则会在编译阶段报错：
let directions_3 = [Directions_2.Up, Directions_2.Down, Directions_2.Left, Directions_2.Right]

// const enum colors_2 {red = "red".length}

// 外部枚举
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：

declare enum Directions_4 {
    Up,
    Down,
    Left,
    Right
}

let directions_6 = [Directions_4.Up, Directions_4.Down, Directions_4.Left, Directions_4.Right];

declare const enum Directions_5 {
    Up,
    Down,
    Left,
    Right
}

let directions_4 = [Directions_5.Up, Directions_5.Down, Directions_5.Left, Directions_5.Right]


// TypeScript 中类的用法
// public private 和 protected
// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal_3 {
    public name
    public constructor(name) {
        this.name = name
    }
}

let a1 = new Animal_3('jack')
console.log(a1.name)
a1.name = 'tom'
console.log(a1.name)


class Animal_4 {
    readonly name
    public constructor(name) {
        this.name = name
    }
}

let a2 = new Animal_4('Tom')
console.log(a2.name)
// a2.name = 'jd'



// 抽象类
// abstract 用于定义抽象类和其中的抽象方法。
// 首先，抽象类是不允许被实例化的

abstract class Animal_5 {
    public name
    public constructor(name) {
        this.name = name
    }
    public abstract sayHi()
}
// 其次，抽象类中的抽象方法必须被子类实现：
class Cat_1 extends Animal_5 {
    public sayHi() {
        console.log(`Meow, my name is ${this.name}`)
    }
}




// 类实现接口
// 实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
// 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。


interface Alarm {
    alert(): void
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('security_door_alarm')
    }
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

// 一个类可以实现多个接口：
class car implements Alarm, Light {
    alert() {
        console.log('car_alarm')
    }
    lightOn() {
        console.log('the light is on')
    }
    lightOff() {
        console.log('the light is off')
    }
}

// 接口继承接口
// 接口与接口之间可以是继承关系：

// 这个 Alarm_1 有alert_1方法也有 Light_on/off 方法
interface Alarm_1 extends Light {
    alert_1(): void
}

// 接口继承类
// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：


// 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。

// 所以 类型interface 可以继承类型class

class Point {
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

interface point_int extends Point {
    z: number
}

let mypoint: point_int = { x: 1, y: 2, z: 3 }


// 值得注意的是，PointInstanceType 相比于 Point，缺少了 constructor 方法，这是因为声明 Point 类时创建的 Point 
// 类型是不包含构造函数的。另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的（实例的类型当然不应该包括构造函数、静态属性或静态方法）。

// 换句话说，声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法：





// 泛型

function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

// 没有准确的定义返回值的类型：

function createArray_1<T>(length: number, value: T): Array<T> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray_1<string>(1, 'x') // 可以在调用的时候指定类型， 也可以直接调用，让他自己去推断
createArray_1(1, 'x')

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

swap([7, 'sev'])

function loggingIdentify<T>(arg: T): T {
    console.log(arg.length) // 由于尚不知道T是什么类型，故而不能访问length属性
    return
}

// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface LengthWise {
    length: number
}

function loggingIdentify_1<T extends LengthWise>(arg: T): T {
    console.log(arg.length)
    return arg
}

// loggingIdentify_1(7) // 这时候如果传入的参数不含length， 则会报错
loggingIdentify_1('5')


interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mysSearch: SearchFunc

mysSearch = function (source: string, substring: string) {
    return source.search(substring) !== -1;
}

interface CreateMyArr {
    <T>(length: number, value: T): Array<T>
}

let createMyArr: CreateMyArr
createMyArr = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}




// 声明合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


