function identify<T, U>(value: T, str: U): T {
  return value
}

console.log(identify<String, Number>('123', 1))

interface genericIdentifyFn<T> {
  (arg: T): T
}

const sum: genericIdentifyFn<string> = (value: string): string => {
  return value
}

class GenericNumber<T> {
  zeroValues: T
  add: (x: T, y: T) => T
}

const genericClass = new GenericNumber<string>()
genericClass.zeroValues = '1'
genericClass.add = (x, y) => {
  return '123'
}

interface Person {
  name: string
  age: number
}

const sam: Person = {
  name: 'sam',
  age: 11,
}

function toArray(x: number): Array<number> {
  return [x]
}

type Func = typeof toArray

type K1 = keyof Person
type K2 = keyof Person[]

interface StringArray {
  // 字符串索引
  [index: string]: string
}

interface StringArray1 {
  // 数字索引
  [index: number]: string
}

interface Lengthwise {
  length: number
}

function loggingIdeitify<T extends Lengthwise>(arg: T): T {
  return arg
}

loggingIdeitify('1') // str.length

// Partial 将某个类型里的属性全都变为 可选项
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'Learn Ts',
  description: 'todo1 desc',
}

const todo2 = updateTodo(todo1, {
  description: 'chooseable desc',
})
