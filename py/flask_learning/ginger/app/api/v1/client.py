from flask import request
from app.validators.forms import ClientForm, UserEmailForm
from app.libs.redprint import RedPrint
from app.libs.enums import ClientTypeEnum
from app.models.user import User
from app.libs.error_code import ClientTypeError, Success
api = RedPrint('client') # 自定义的红图

@api.route('/register', methods=['POST'])
def create_client() :
    # 获取客户端提交过来的参数
    # request.json
    form = ClientForm().validate_for_api() # 链式调用
    clientMatch = {
        ClientTypeEnum.USER_EMAIL: __register_user_by_email,
        ClientTypeEnum.USER_MOBILE: __register_user_by_mobile
    }
    # 可以接受定义的复杂，但是不接受调用的复杂
    clientMatch[form.login_type.data]()

    # 异常类型
    # 1、可以预知的 APIException
    # 2、不可预知的，没有意识到的 

    # AOP 全局异常处理

    # 按照restApi风格来说，URL尽量不能包含动词
    # 所以这里就不需要包含/get , / 即可
    return Success()

def __register_user_by_email() :
    form = UserEmailForm().validate_for_api()
    User.register_user_by_email(form.nickname.data,form.account.data, form.secret.data)

def __register_user_by_mobile() :
    pass

