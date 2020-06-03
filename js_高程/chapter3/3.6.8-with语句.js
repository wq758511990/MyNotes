var qs = location.search.substring(1); 
var hostName = location.hostname; 
var url = location.href;


// 一下代码等于上面代码,
// with 内部背个局部变量都默认带有location
with(location) {
    var qs = search.substring(1)
    var hostName = hostname
    var url = href
}