x = 1234.56879

res = format(x, '0.2f')
print(res + '|')
res = format(x, '>10.2f')
print(res + '|')
res = format(x, '<10.2f')
print(res + '|')
res = format(x, '^10.2f')
print(res + '|')

print('The value is {:^0,.2f}'.format(x))