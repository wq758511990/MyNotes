from flask import jsonify, g

from webapp.libs.redprint import RedPrint
from webapp.models.user import User
from webapp.libs.token_auth import auth
api = RedPrint('user')

# 管理员获取任意用户信息
@api.route('/<int:uid>')
@auth.login_required
def super_get_user(uid) :
    user = User.query.filter_by(id=uid).first_or_404()
    return jsonify(user)


# 用户获取本人信息
@api.route('')
@auth.login_required
def get_user() :
    uid = g.user.uid
    user = User.query.filter_by(id=uid).first_or_404()
    return jsonify(user)

