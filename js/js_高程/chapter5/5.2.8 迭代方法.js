var numbers = [1, 2, 3, 4, 5, 6]
// every -- 每一项都满足条件才返回true
// some -- 某一项满足条件则返回true
var res1 = numbers.every((item, index, array) => {
    return item > 2
})
console.log(res1)

var res2 = numbers.some((item, index, array) => {
    return item > 2
})
console.log(res2)

// filter -- 返回满足条件的值
var res3 = numbers.filter((item, idx, arr) => {
    return item > 2
})

console.log(res3)

// map()也返回一个数组，而这个数组的每一项都是在原始数组中的对应项上运行传入函数的结果。
// 例如，可以给数组中的每一项乘以 2，然后返回这些乘积组成的数组，如下所示。

var res4 = numbers.map((item) => {
    // 这个数组的每一项都是在原始数组中的对应项上运行传入函数的结果。
    return item > 2
})

console.log(res4)


// reduce()和 reduceRight()。这两个方法都会迭
// 代数组的所有项，然后构建一个最终返回的值。其中，reduce()方法从数组的第一项开始，逐个遍历
// 到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。

// 这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，
// 因此第一个参数是数组的第一项，第二个参数就是数组的第二项

var values = [1, 2, 3, 4, 5]
var sum = values.reduce((prev, cur, idx, arr) => {
    console.log('prev', prev)
    console.log('cur', cur)
    return prev + cur
})
console.log(sum)

// reduceRight()的作用类似，只不过方向相反而已。