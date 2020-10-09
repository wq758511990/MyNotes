const buf1 = Buffer.alloc(10) // 开启一个10字节的缓冲区
console.log(buf1)

const buf2 = Buffer.from('a')
console.log('buf2', buf2) // <Buffer 61> 61为16进制 即97

