const hello = (name: string): String => {
    return `hello ${name}`
}

let user: [string, number] = ['1', 2]

let input: string | number
const num = input as number


interface Radio {
    switchRadio(trigger: boolean): void
}

interface Battery {
    checkBatteryStatus(): void
}

interface RadioWithBattery extends Radio {
    // 接口继承
}

class Car implements Radio, Battery {
    switchRadio() {}
    checkBatteryStatus() {}
}


// enums
enum Direction {
    Up = 'UP',
    Down = 'Down',
    Left = 'LEFT',
    Right = 'RIGHT'
}
let value = 'UP'
if (value === Direction.Up) {
    console.log('yes')
}
console.log(Direction.Up)


// 泛型
function echo<T>(arg: T): T {
    return arg
}

const result = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const res = swap(['str', 123])

interface IWthLength {
    length: number
}

function echoWithLength<T extends IWthLength>(arg: T): T { // extends让传入值满足条件
    console.log(arg.length)
    return arg
}

echoWithLength('str')
echoWithLength({length: 10})
echoWithLength([1, 2, 3])
echoWithLength(3)


class Queue<T> {
    private data = []
    push(item: T) {
        this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(2)

interface KeyPair<T, U> {
    key: T,
    value: U
}

let kp1: KeyPair<number, string> = {
    key: 1,
    value: 'str'
}

let arrTwo: Array<number> = [1,2, 3]

const sum = (x: number): number => {
    return 1
}