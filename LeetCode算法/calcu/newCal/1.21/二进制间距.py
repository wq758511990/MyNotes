def transpose(N: int):
    str1 = bin(N)[2:]
    if str1.count('1') <= 1: return 0
    maxNum = 1
    count = 1
    for x in str1 :
        if x == '1' :
            maxNum = max(count, maxNum)
            count = 1
        else :
            count += 1
    
    return maxNum
         
print(transpose(8))
