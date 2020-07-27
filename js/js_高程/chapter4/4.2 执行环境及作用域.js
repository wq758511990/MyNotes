var color = 'blue'
function getColor() {
    if(color == 'blue') {
        color = 'red'
    }
}

getColor()
console.log(color)


// 4.2.1 延长作用域链
// 1、 with

function buildUrl() {
    var qs = '?username=www'
    with(location) {
        var url = href + qs
    }
    // 这里是可以访问到url的
    return url
}

// 2、 try-catch

// js没有块级作用域。。 ？
// 有块级作用域 如C、C++、java，在for循环完成之后， 变量i会被销毁
// 而js中 循环完成之后，i依然会存在，会被添加到当前的执行环境
for(var i = 0; i < 10; i++) {

}
// 这里 i = 10
console.log(i)