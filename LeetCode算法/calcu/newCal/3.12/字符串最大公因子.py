import re
def gcdOfStrings(str1, str2):
    if str1 + str2 != str2 + str1:
        return ''
    return str1[0: gcd(len(str1), len(str2))]

def gcd(a, b) :
    return a if b == 0 else gcd(b, a % b)

print(gcdOfStrings('ABCABC', 'ABC'))
