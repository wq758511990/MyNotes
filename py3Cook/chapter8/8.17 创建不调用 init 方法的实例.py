class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

d = Date.__new__(Date)

date = {'year': 2012, 'month': 12, 'day': 12}

for k, v in date.items() :
    setattr(d, k, v)

print(d.year)