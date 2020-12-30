let pattern = /at/g //  匹配字符串中的所有"at"
let pattern = /[bc]at/i // 匹配第一个"bat"或"cat"，忽略大小写
let pattern3 = /.at/gi // 匹配所有以"at"结尾的三字符组合，忽略大小写

// 匹配第一个"bat"或"cat"，忽略大小写
let pattern1 = /[bc]at/i
// 匹配第一个"[bc]at"，忽略大小写
let pattern2 = /\[bc\]at/i
// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi
// 匹配所有".at"，忽略大小写
let pattern4 = /\.at/gi
