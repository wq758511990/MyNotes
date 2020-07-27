from fractions import Fraction
a = Fraction(5, 4)
b = Fraction(7, 16)
c = a / b
print(c)
print(c.numerator)  # 分子
print(c.denominator) # 分母 
print(float(c))
print(c.limit_denominator(8))