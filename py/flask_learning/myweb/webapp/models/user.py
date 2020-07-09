from sqlalchemy import Column, Integer, String, SmallInteger, orm
from .base import Base, db
class User(Base) :
    id = Column(Integer, primary_key=True)
    emamil = Column(String(24), unique=True, nullable=False)
    nickname = Column(String(24), unique=True)
    auth = Column(SmallInteger, default=1)
    _password = Column('password', String(100))

    @orm.reconstructor
    def __init__(self) :
        pass
    
    @staticmethod
    def create_user() :
        print('create')
        with db.auto_commit() :
            user = User()
            user.emamil = 'test@qq.com'
            user.nickname = 'testname'
            user.auth = 1
            user.password = 'secret'
            db.session.add(user)