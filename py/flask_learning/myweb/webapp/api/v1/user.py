from webapp.libs.redprint import RedPrint
from webapp.models.user import User
api = RedPrint('user')

@api.route('/<int:uid>')
def getUser(uid) :
    return 'a str from user_get' + str(uid)

