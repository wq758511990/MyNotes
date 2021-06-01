type Person = {
  name: string
  age: string
}

type PersonKeys = keyof Person

type PersonOnlyName = Pick<Person, 'name'>
