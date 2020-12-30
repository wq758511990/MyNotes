const people = [
  {
    name: 'Matt',
    age: 27,
  },
  {
    name: 'Nicholas',
    age: 29,
  },
  {
    age: 30,
  },
]

const res = people.find((item, index) => item.age < 28)
const res1 = people.filter((item) => item.age < 30)
const res2 = people.every((item) => item.age < 30)
const res3 = people.some((item) => item.age < 30)
const res4 = people.map((item) => item.age * 2)
console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
// ============== 6.4 ==================
const m1 = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3'],
])
console.log(m1.size)
m1.set('key4', 'val4').set('key5', 'val5')

// map的键可以是任意的js数据类型
const functionKey = function () {}
m1.set(functionKey, 'functionValue')
console.log(m1)

console.log('============ 6.6 Set =============')
const s = new Set()
console.log(s.has('Matt'))
console.log(s.size)

s.add('Matt').add('Frisibe')
console.log(s)
s.delete('Matt')
console.log(s)
