class Mytest :
    def __init__(self, name) :
        self._name = name

    @property
    def name(self) :
        return self._name
    
    @name.setter
    def name(self, newVal) :
        print('setter:' + newVal)
        self._name = newVal
    

mytest = Mytest('tom')
print(mytest.name)
mytest.name = 'sam'
print(mytest.name)