const target = {
  foo: 'bar'
}

const handler = {
  get (trapTarget, property, receiver) {
    // console.log(trapTarget) {foo: 'bar}
    // console.log(property) foo
    // console.log(receiver) proxy
    console.log(trapTarget === target);
    console.log(property);
    console.log(receiver === proxy);
  }
}

const proxy = new Proxy(target, handler)

proxy.foo