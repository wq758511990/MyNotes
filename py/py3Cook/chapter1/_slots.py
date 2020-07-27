class Student(object) :
    __slots__ = ('name', 'age') 

s = Student()
s.name = 'www'
# s.score = 10
# __slots__限制属性，这里slots中只有name 和 age 故而当设置s.score时会报错
# __slots__ 对继承的类不管用

class supStudent(Student) :
    pass

p = supStudent()
p.score = 100
print(p.score)