const s: string = "123"
console.log(s)
const sArr: string[] = ['tm']
console.log(sArr)

function greet(person: string): string {
    return  `hello ${person}`
}

greet('xiaoMing')

interface Orm {
    name: string;
    age?: number;
}

function fn2(o: Orm) {
    console.log(o)
}
const param = {
    name: "man"
}
fn2(param)

// 类型断言
const someValue: any = '123'
const strLen: number = (someValue as string).length
console.log(strLen)

// 联合类型
let union: string | number
union = '1'
union = 1

// 交叉类型
type First = {first: number}
type Second = {second: number}

// 扩展新的type
type FirstAndSecond = First & Second // 交叉


function fn4(param: FirstAndSecond): FirstAndSecond {
    return {first: 1, second: 2}
}

// 函数重载 同名函数有不同参数
// 先声明、再实现
function watch(cb1: () => void): void
// 声明可以有多个
function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void
function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void): void {
    if (cb1 && cb2) {
        console.log('重载2')
    } else {
        console.log('重载1')
    }
}

