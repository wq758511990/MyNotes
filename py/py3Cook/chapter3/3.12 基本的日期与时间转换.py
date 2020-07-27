from datetime import timedelta
a = timedelta(days=2, hours=6)
b = timedelta(hours=4.5)
c = a + b
print(c.days)
# print(c.hours)  没有hours这个属性
print(c.seconds / 3600) # c的秒数
print(c.total_seconds() / 3600) # c的总秒数/3600 算出hours 总秒数是个方法 要加上()

from datetime import datetime
a = datetime(2020, 2, 28)
print(a + timedelta(days=1))
b = datetime(2020, 7, 20)
c = b - a
print(c.days)
now = datetime.today()
print(now)