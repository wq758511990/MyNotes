function mainFunc() {
    var i;
    var a = []
    var b = []
    var resArr = []
    for (var i = 1; i < 100; i++)
        a[i - 1] = i;
    combine(a, 7, 4, b, 4, resArr);
    return resArr

    function combine(a, n, m, b, M) {
        var i, j
        for (var i = n; i >= m; i--) {
            var tempArr = []
            b[m - 1] = i - 1;
            if (m > 1)
                combine(a, i - 1, m - 1, b, M);
            else {
                for (j = M - 1; j >= 0; j--)
                    tempArr.push(a[b[j]])
                if(tempArr != []) {
                    resArr.push(tempArr)
                }
            }
        }
    }
}

console.log(mainFunc())