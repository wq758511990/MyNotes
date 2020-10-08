const kkb = {
    info: {name: '开课吧'},
    get name() {
        return this.info.name
    },
    set name(val) {
        console.log('new name is ' + val)
        this.info.name = val
    }
}

console.log(kkb.name)
kkb.name = 'kkb'
console.log(kkb.name)