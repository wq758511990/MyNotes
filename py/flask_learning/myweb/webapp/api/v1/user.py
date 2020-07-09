from webapp.libs.redprint import RedPrint
from webapp.models.user import User
api = RedPrint('user')

@api.route('/<int:uid>')
def getUser(uid) :
    User.create_user()
    return 'a str from user_get' + str(uid)


@api.route('/update', methods=['POST'])
def updateUser() :
    return 'str from user_post'