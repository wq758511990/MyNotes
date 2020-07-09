from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import Column, Integer, String, SmallInteger, orm
from app.models.base import Base, db
from app.libs.error_code import NotFound, AuthFailed
class User(Base) :
    id = Column(Integer, primary_key=True)
    email = Column(String(24), unique=True, nullable=False)
    nickname = Column(String(24), unique=True)
    auth = Column(SmallInteger, default=1)
    _password = Column('password', String(100))
    pass

    @orm.reconstructor
    def __init__(self) :
        # 正常来讲sqlelchamy模型实例化的时候不会调用__init__方法，要想调用这个方法可以使用装饰器 orm.reconstructor
        pass

    def keys(self) :
        return ('id', 'email', 'nickname', 'auth')


    @property
    def password(self) :
        return self._password
    
    @password.setter
    def password(self, raw) :
        self._password = generate_password_hash(raw)

    @staticmethod
    def register_user_by_email(nickname, account, secret) :
        with db.auto_commit() :
            user = User()
            user.nickname = nickname
            user.email = account
            user.password = secret
            db.session.add(user)

    @staticmethod
    def verify(email, password) :
        user = User.query.filter_by(email=email).first_or_404()
        if not user.check_password(password) :
            raise AuthFailed()
        scope = 'AdminScope' if user.auth == 2 else 'UserScope'
        return {'uid': user.id, 'scope': scope}


    
    def check_password(self, raw) :
        if not self._password :
            return False
        return check_password_hash(self._password, raw)