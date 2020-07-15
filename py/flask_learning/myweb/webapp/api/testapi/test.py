from webapp.libs.redprint import RedPrint

api = RedPrint('test')

@api.route('')
def test() :
    return 'testStr'