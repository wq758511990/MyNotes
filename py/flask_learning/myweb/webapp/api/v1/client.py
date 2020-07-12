from flask import request
from webapp.validators.forms import ClientForm, UserEmailForm
from webapp.libs.redprint import RedPrint
from webapp.libs.enums import ClientTypeEnum
from webapp.models.user import User
from webapp.libs.error_code import ClientTypeError, Success

api = RedPrint('client')

@api.route('/register')
def create_client():
    form = ClientForm().validate_for_api() # 链式调用
    clientMatch = {
        ClientTypeEnum.USER_EMAIL: __register_user_by_email,
        ClientTypeEnum.USER_MOBILE: __register_user_by_mobile
    }

    # 可以接受定义的复杂，但是不接受调用的复杂
    clientMatch[form.login_type.data]()


    return Success()


def __register_user_by_email() :
    form = UserEmailForm().validate_for_api()
    User.register_user_by_email(form.nickname.data,form.account.data, form.secret.data)

def __register_user_by_mobile() :
    pass