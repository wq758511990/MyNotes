from sqlalchemy import Column, Integer, String, SmallInteger, orm, DateTime
from .base import Base, db
from werkzeug.security import generate_password_hash, check_password_hash
from webapp.libs.error_code import AuthFailed
from datetime import datetime

class User(Base) :
    id = Column(Integer, primary_key=True)
    email = Column(String(24), unique=True, nullable=False)
    nickname = Column(String(24), unique=True)
    auth = Column(SmallInteger, default=1)
    _password = Column('password', String(100))

    @orm.reconstructor
    def __init__(self) :
        # @orm.reconstructor 可以在数据模型被实例化的时候被调用，若不加这个装饰器则不可以
        pass
    

    def keys(self) :
        return ('id', 'email', 'nickname', 'auth')

    @property
    def password(self) :
        return self._password
    
    @password.setter
    def password(self, raw) :
        self._password = generate_password_hash(raw) # 这里的password前面的_不能漏，否则等于当前死循环

    @staticmethod
    def register_user_by_email(nickname, account, secret) :
        with db.auto_commit() :
            user = User()
            user.nickname = nickname
            user.email = account
            user.password = secret
            # user.create_time = int(datetime.now().timestamp())
            db.session.add(user)


    @staticmethod
    def verify(email, password) :
        user = User.query.filter_by(email=email).first_or_404()
        if not user.check_password(password) :
            raise AuthFailed()
        # 身份匹配
        auth_match = {
            1: 'UserScope',
            2: 'AdminScope'
        }
        scope = auth_match[user.auth]
        return {'uid': user.id, 'scope': scope}

    def check_password(self, raw):
        if not self._password:
            return False
        return check_password_hash(self._password, raw)
    