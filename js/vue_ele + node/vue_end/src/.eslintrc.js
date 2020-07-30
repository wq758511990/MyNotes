module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint',
        "ecmaVersion": 6,
    },
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    extends: ["plugin:vue/essential"],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    // add your custom rules here
    'rules': {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "parser": "babel-eslint"
    }
}