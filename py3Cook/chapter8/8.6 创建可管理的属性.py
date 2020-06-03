class Person :
    def __init__(self, first_name) :
        self.first_name = first_name

    @property
    def first_name(self) :
        return self._first_name

    @first_name.setter
    def first_name(self, value) :
        if not isinstance(value, str) :
            raise TypeError('Expected a str')
        self._first_name = value

    @first_name.deleter
    def first_name(self) :
        raise AttributeError("Can't delete attribute")

a = Person('llei')
print(a.first_name)
a.first_name = 42
print(a.first_name)
del a.first_name
