from flask import Blueprint, jsonify, g

from app.libs.redprint import RedPrint
from app.libs.token_auth import auth
from app.models.user import User
from app.models.base import db
from app.libs.error_code import DeleteSuccess
api = RedPrint('user') # 自定义的红图

class Wzx :
    user = "wzx"
    email = "test@qq.com"

    def __init__(self) :
        self.gender = 0

    def keys(self) :
        return ('user', 'email', 'gender')

    def __getitem__(self, item) :
        return getattr(self, item)

# 管理员的获取用户借口
@api.route('/<int:uid>')
@auth.login_required
def super_get_user(uid) :
    user = User.query.filter_by(id=uid).first_or_404()
    # 1、验证令牌是否合法、过期
    # 当flask 知道如何序列化传入的值的时候就不会调用JSONEncoder里的default函数
    # 如果传入的是User模型就会调用default函数
    # 所以要在default函数中 实现序列化User模型
    return jsonify(user)

# 管理员可以删除任意用户
@api.route('<int:uid>', methods=['DELETE'])
@auth.login_required
def super_deleteUser() :
    pass

# 普通用户获取借口
@api.route('')
@auth.login_required
def get_user() :
    uid = g.user.uid
    user = User.query.filter_by(id=uid).first_or_404()
    return jsonify(user)

# 普通用户删除借口
@api.route('', methods=['DELETE'])
@auth.login_required
def del_user() :
    # 此时只要有用户登录他就可以删除任意一个用户，应做优化
    # 从令牌中拿取对应用户的uid， 这样只能删除对应的用户
    uid = g.user.uid
    print(uid)
    # g变量是线程隔离的，不需要担心请求数据错乱
    user = User.query.get_or_404(uid)
    with db.auto_commit() :
        user = User.query.filter_by(id=uid).first_or_404()
        user.delete()
    return DeleteSuccess()