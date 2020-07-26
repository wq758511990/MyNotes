s1 =  'Spicy Jalape\u00f1o'
s2 = 'Spicy Jalapen\u0303o'
print(s2 + '\n' + s1)
print(s1 == s2)
import unicodedata
t1 = unicodedata.normalize('NFC', s1)
t2 = unicodedata.normalize('NFC', s2)
print(t1 + '\n' + t2)
print(t1 == t2)