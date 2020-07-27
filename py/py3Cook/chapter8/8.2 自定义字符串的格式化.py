_formats = {'ymd': '{d.year}-{d.month}-{d.day}',
 'mdy': '{d.month}/{d.day}/{d.year}',
 'dmy': '{d.day}/{d.month}/{d.year}'
}

class Date(object) :
    def __init__(self, day, month, year) :
        self.day = day
        self.month = month
        self.year = year

    def __format__(self, code) :
        if code == '' :
            code = 'ymd'
        
        fmt = _formats[code]
        return fmt.format(d=self)
        
d = Date(21, 12, 2020)
print(format(d))