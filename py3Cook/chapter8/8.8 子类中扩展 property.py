class Person:
    def __init__(self, name):
        self.name = name

    # Getter function
    @property
    def name(self):
        return self._name

    # Setter function
    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise TypeError('Expected a string')
        self._name = value

    # Deleter function
    @name.deleter
    def name(self):
        raise AttributeError("Can't delete attribute")

class Student(Person) :
    @property
    def name(self) :
        return self._name
    
    @name.setter
    def name(self, value) :
        print('StudentName')
        if not isinstance(value, str) :
            raise TypeError('Expected String')
        self._name = value
    
    @name.deleter
    def name(self) :
        print('Student Deleter')
        raise AttributeError('Can not delete attribute')


s = Student('Sally')
print(s.name)
s.name = 'Sam'
print(s.name)
del(s.name)