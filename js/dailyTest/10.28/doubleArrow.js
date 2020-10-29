function logger() {
    return a => b => {
        return b(a)
    }
}

console.log(logger)