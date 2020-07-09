from webapp.libs.redprint import RedPrint

api = RedPrint('user')

@api.route('/<int:uid>')
def getUser(uid) :
    return 'a str from user_get' + str(uid)


@api.route('/update', methods=['POST'])
def updateUser() :
    return 'str from user_post'