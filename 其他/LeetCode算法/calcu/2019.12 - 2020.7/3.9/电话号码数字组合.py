def letterCombinations(digits) :
    digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    ans = ['']
    if not digits :
        return ans
    for num in digits :
        ans = [pre + cur for pre in ans for cur in digitMap[num]]
    return ans

print(letterCombinations('23'))