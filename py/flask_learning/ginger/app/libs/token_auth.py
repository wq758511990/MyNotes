from flask_httpauth import HTTPBasicAuth
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired
from app.libs.error_code import AuthFailed, Forbidden
from collections import namedtuple
from flask import current_app, g, request
from app.libs.scope import is_in_scope


auth = HTTPBasicAuth()
User = namedtuple('User', ['uid', 'ac_type', 'scope'])

@auth.verify_password
def verify_password(token, password) :
    user_info = verify_auth_token(token)
    if not user_info :
        return False
    g.user = user_info
    return True



def verify_auth_token(token) :
    expiration = current_app.config['TOKEN_EXPIRATION']
    s = Serializer(current_app.config['SECRET_KEY'], expires_in=expiration)

    try :
        data = s.loads(token)
    except BadSignature:  # token验证失败
        raise AuthFailed(msg='token is invalid', error_code=1002)
    except SignatureExpired : # 过期
        raise AuthFailed(msg='token is expired', error_code=1003)
    uid = data['uid']
    ac_type = data['type']
    scope = data['scope']
    allow = is_in_scope(scope, request.endpoint) # request.endpoint可以拿到当前访问的视图函数，也就是要访问的接口
    if not allow :
        raise Forbidden()

    return User(uid, ac_type, scope)