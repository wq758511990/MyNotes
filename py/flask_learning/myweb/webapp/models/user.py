from sqlalchemy import Column, Integer, String, SmallInteger, orm
from .base import Base, db
from werkzeug.security import generate_password_hash, check_password_hash
from webapp.libs.error_code import AuthFailed
class User(Base) :
    id = Column(Integer, primary_key=True)
    emamil = Column(String(24), unique=True, nullable=False)
    nickname = Column(String(24), unique=True)
    auth = Column(SmallInteger, default=1)
    _password = Column('password', String(100))

    @orm.reconstructor
    def __init__(self) :
        pass
    

    def keys() :
        return ['id', 'email', 'nickname', 'auth']

    @property
    def password(self) :
        return self.password
    
    @password.setter
    def password(self) :
        self.password = generate_password_hash(self.password)

    @staticmethod
    def register_by_user_email(nickname, account, password):
        with db.auto_commit() :
            user = User()
            user.nickname = nickname
            user.emamil = account
            user.password = generate_password_hash(password)
            db.session.add(user)

    @staticmethod
    def verify(email, password):
        user = User.query.filter_by(email=email).first_or_404()
        if not user.check_password(password) :
            raise AuthFailed()
        scope = 'AdminScope' if user.auth == 2 else 'UserScope'
        return {'uid': user.id, 'scope': scope}

    def check_password(self, raw):
        if not self._password:
            return False
        return check_password_hash(self._password, raw)
    