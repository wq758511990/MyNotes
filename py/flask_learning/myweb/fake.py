from webapp import create_app
from webapp.models.base import db
from webapp.models.user import User

app = create_app()
with app.app_context() :
    with db.auto_commit() :
        user = User()
        user.nickname = 'zero'
        user.password = '123456'
        user.email = 'zero@qq.com'
        user.auth = 2
        db.session.add(user)