from operator import attrgetter
class User:
    def __init__(self, user_id):
        self.user_id = user_id

    def __repr__(self):
        return 'User__repr({})'.format(self.user_id)

    # def __str__(self) :
    #     return 'User_str({})'.format(self.user_id)


def sort_notcompare():
    users = [User(23), User(3), User(99)]
    # print(users)
    for x in users :
        print(x) # print一个实例，默认调用的是__str__ ，若没有重定义__str__, 则调用__repr__
    # print(sorted(users, key=lambda u: u.user_id)) 
    print(sorted(users, key=attrgetter('user_id'))) # 除了lambda 可以用attrgetter, attrgetter会更快一些

sort_notcompare()