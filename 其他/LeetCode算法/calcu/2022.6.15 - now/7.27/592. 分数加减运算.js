var fractionAddition = function(expression) {
    let denominator = 0, numerator = 1; // 分子，分母
    let index = 0, n = expression.length;
    while (index < n) {
        // 读取分子
        let denominator1 = 0, sign = 1;
        if (expression[index] === '-' || expression[index] === '+') {
            sign = expression[index] === '-' ? -1 : 1;
            index++;
        }
        while (index < n && isDigit(expression[index])) {
            denominator1 = denominator1 * 10 + expression[index].charCodeAt() - '0'.charCodeAt();
            index++;
        }
        denominator1 = sign * denominator1;
        index++;

        // 读取分母
        let numerator1 = 0;
        while (index < n && isDigit(expression[index])) {
            numerator1 = numerator1 * 10 + expression[index].charCodeAt() - '0'.charCodeAt();
            index++;
        }

        denominator = denominator * numerator1 + denominator1 * numerator;
        numerator *= numerator1;
    }
    if (denominator === 0) {
        return "0/1";
    }
    const g = gcd(Math.abs(denominator), numerator); // 获取最大公约数
    return Math.floor(denominator / g) + "/" + Math.floor(numerator / g);
}

const gcd = (a, b) => {
    let remainder = a % b;
    while (remainder !== 0) {
        a = b;
        b = remainder;
        remainder = a % b;
    }
    return b;
};

const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}