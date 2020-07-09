from flask import current_app, jsonify

from app.libs.redprint import RedPrint
from app.validators.forms import ClientForm
from app.models.user import User
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from app.libs.enums import ClientTypeEnum


api = RedPrint('token')

@api.route('', methods=['POST'])
def get_token() :
    # postman发送请求的时候不要有多余的逗号
    form = ClientForm().validate_for_api()
    clientMatch = {
        ClientTypeEnum.USER_EMAIL: User.verify,
    }
    identity = clientMatch[ClientTypeEnum(form.login_type.data)](
        form.account.data,
        form.secret.data
    )
    # token
    expiration = current_app.config['TOKEN_EXPIRATION']
    token = generate_auth_token(identity['uid'], form.login_type.data, identity['scope'], expiration)

    t = {
        "token": token.decode('ascii')
    }
    return jsonify(t), 201

def generate_auth_token(uid, ac_type, scope=None, expiration=7200) :
    s = Serializer(current_app.config['SECRET_KEY'], expires_in=expiration)
    return s.dumps({
        "uid": uid,
        "type": ac_type.value,
        "scope": scope
    })