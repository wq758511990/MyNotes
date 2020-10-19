// 这里的属性会与内置 request 的 prototype 对象进行合并

module.exports = {
  get foo() {
    // // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    return this.get('x-request-foo')
  }
}