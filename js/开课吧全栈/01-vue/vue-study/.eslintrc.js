module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'no-unused-vars': [
            'warning',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
        ]
    }
}
