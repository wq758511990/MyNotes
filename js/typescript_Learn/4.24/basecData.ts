let isDone: boolean = false
let byteNum: number = 0xff1d

let unusable: void = null // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined
let n: null = null

// undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = undefined
// 已有的u变量为undefined，可以直接用来赋值
let num_1: number = u

// 而 void 类型的变量不能赋值给 number 类型的变量：
let v: void
// let num_2: number = v 不被允许



// any类型

let str_1: string = "testStr"
// str_1 = 3  类型不能改变，除了any
let str2: any = "testStr2"
str2 = 3 // 这样就可以

// 在任意值上访问任何属性都是允许的：
let anything: any = "hello"
console.log(anything.myname)
console.log(anything.mytest)
// 也可以调用任意方法
anything.myFunc()
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let any_1
any_1 = "something"
any_1 = 5



// 类型推论

let testStr3 = "test" // 尽管没有声明类型，但这里testStr3会被推断为字符串
testStr3 = 5 // 所以这里改变了其类型 故而不被允许




// 联合类型

// 这里的UnionType 可以是字符串 也可以是 number
let unionType: string | number = "test"
unionType = 8
unionType = "test1"
// unionType = true // 报错

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
unionType.length // 根据当前变量类型，判断是否能访问，这时候变量是string类型，故而可以访问
unionType.toString() // 二者共有的方法就可以访问



// 接口

interface Person {
    name: string;
    age: number
}

let tom: Person = {
    name: "Tom",
    age: 18, // 属性再多就会报错
    // class: 3
}


// 可选属性
// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：

interface Person1 {
    name: string,
    age?: number
}

let sam: Person1 = {
    name: 'Sam',
    // 这里age 可要可不要
    // 这时仍然不允许添加未定义的属性：
    // class: 3
}

// 任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
interface Person2 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tommy: Person2 = {
    name: 'tommy',
    gender: '3'
}



// 只读属性
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
interface Person3 {
    readonly id?: number;
    age: number
}

let kite: Person3 = {
    // id: 123 // 初始化id
    age: 13
}
// kite.id = 3 // 这里再去修改就会报错

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// 上面例子中初始化kite的时候并没有给id赋值，然而这之后还是不能修改id
// kite.id = 3  依然报错




// 数组的类型
// 最简单的方法是使用「类型 + 方括号」来表示数组：
let arrlist: number[] = [1, 2, 3]
// 数组的项中不允许出现其他的类型
// arrlist.push('3')  这里字符串不能被push到 Number类型的数组中

// 我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let arrlist_1: Array<number> = [3, 2, 1]

// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let arrlist_2: any[] = [1, 2, '3', { a: 'b' }, false]




// 函数类型
function sum(x: number, y: number): number {
    return x + y
}

sum(1, 2)
// sum(1, 2, 3) 多余参数会报错
// sum(1) 少了的参数也会报错


// 可选参数
function sum_1(x: number, y: number, z?: number): number {
    return z ? x + y + z : x + y
}

console.log(sum_1(1, 2))



// 参数默认值
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function sum_2(x: number = 1, y: number): number {
    return x + y
}

sum_2(undefined, 1)



// 剩余参数
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
// 注意： 剩余参数必须是最后一个参数
function push(arr1: number[], ...arr2: number[]) {
    arr2.forEach((item) => {
        arr1.push(item)
    })
}

let a: any[]
push(a, 3, 2, 5, 6)





// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function myreverse(x: number | string, ): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}



// 断言
interface cat {
    name: string,
    run(): void
}

interface fish {
    name: string,
    swim(): void
}

function isFish(animal: cat | fish) {
    if (typeof animal.swim == 'function') {
        return true
    }
    return false
}
// 上面例子 animal.swim 会报错，因为尚不知道是cat还是fish， 而cat中没有swim
// 故而可以用断言
// 下面断言animal 为 fish， 这样就可以访问到swim
function isFish1(animal: cat | fish) {
    if (typeof (animal as fish).swim == 'function') {
        return true
    }
    return false
}



// 将一个父类断言为更加具体的子类
// 当类之间有继承关系时，类型断言也是很常见的

class httpError extends Error {
    statusCode: number = 0
}

class apiError extends Error {
    code: number = 200
}

function isApiError(error: Error) {
    if(typeof (error as apiError).code == 'number') {
        return true
    }

    return false
}



// 将任何一个类型断言为 any
// 理想情况下，TypeScript 的类型系统运转良好，每个值的类型都具体而精确。

window.foo = 1;
// 上面的例子中，我们需要将 window 上添加一个属性 foo，但 TypeScript 编译时会报错，提示我们 window 上不存在 foo 属性。
// 此时我们可以使用 as any 临时将 window 断言为 any 类型：
(window as any). foo2 = 1

// 需要注意的是，将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。




// 将 any 断言为一个具体的类型
let anything_1: any 



// 从上面的例子中，我们可以总结出：
//   联合类型可以被断言为其中一个类型
//   父类可以被断言为子类
//   任何类型都可以被断言为 any
//   any 可以被断言为任何类型
//   要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可




// 双重断言
// A as any  any as B
// 不得已不要用，八成是错的




// 类型断言 vs 类型转换
// 类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：

function toBoolean(something: any): boolean {
    return something as boolean
    return Boolean(something)
}
toBoolean(1) // 返回1

// 类型断言不是类型转换，它不会真的影响到变量的类型。

// 若要进行类型转换，需要直接调用类型转换的方法：



// 声明文件
jQuery('#foo')
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量

// jQuery = function(selector: number) : string {
//     return '123'
// }

// 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现5：

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

Jquery.ajax('/src/test.js')

jQuery_2.ajax('/api/get_something');
console.log(jQuery_2.version);
const e = new jQuery_2.Event();
e.blur(jQuery_2.EventType.CustomClick);


let settings: AjaxSettings = {
    method: 'GET',
    data: {
        name: 'sam'
    }
}
jQuery_3.ajax('test', settings)

let settings_1: jQuery_4.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'tom'
    }
}

jQuery_4.ajax('test', settings_1)
import foo from './src/myexp';
// foo()



// ECMAScript 的内置对象


let b: Boolean = new Boolean(1)
let e1: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

Math.pow(10, 2)

// 类型别名 type
type name = string
type NameResolve = () => string
type NameOrResolve = name | NameResolve

function getName(n: NameOrResolve) : name {
    if(typeof n == 'string') {
        return n
    }else {
        return n()
    }
}