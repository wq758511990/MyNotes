def intToRoman(num):
    # romanMap = {
    #     1: 'I',
    #     4: 'IV',
    #     5: 'V',
    #     9: 'IX',
    #     10: 'X',
    #     40: 'XL',
    #     50: 'L',
    #     90: 'XC',
    #     100: 'C',
    #     400: 'CD',
    #     500: 'D',
    #     900: 'CM',
    #     1000: 'M'
    # }
    romanList = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
                 ]
    resStr = ''
    while num > 0:
        for (k, v) in romanList:
            if num >= k:
                num -= k
                resStr += v
                break
    return resStr


print(intToRoman(1994))
