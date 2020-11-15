module.exports = {
  root: true,
  extends: ['plugin:vue/essential'],
  parserOptions: {
    sourceType: 'module', //类型为module，因为代码使用了使用了ECMAScript模块
    parser: 'babel-eslint' //解析器，这里我们使用babel-eslint
  },
  env: {
    node: true
  },
  rules: {
    indent: [2, 2], // 强制使用一致的缩进
    eqeqeq: [2, 'always'], // 要求使用 === 和 !==
    semi: [2, 'never'], // 要求或禁止使用分号代替 ASI
    quotes: [2, 'single'], // 强制使用一致的反勾号、双引号或单引号
    'vue/no-unused-components': [0]
  }
}
