from flask import jsonify, current_app

from webapp.libs.redprint import RedPrint
from webapp.validators.forms import ClientForm
from webapp.models.user import User
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from webapp.libs.enums import ClientTypeEnum

api = RedPrint('token')

@api.route('', methods=['POST'])
def get_token() :
    form = ClientForm().validate_for_api()
    clientMatch = {
        ClientTypeEnum.USER_EMAIL: User.verify
    }
    identity = clientMatch[ClientTypeEnum(form.login_type.data)](
        form.account.data,
        form.secret.data
    )
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