// 框架会把 app/extend/response.js 中定义的对象与内置 response 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 response 对象。
module.exports = {
  set foo(value) {
    this.set('x-response-foo', value);
  },
};