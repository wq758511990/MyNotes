from flask import Blueprint

from app.libs.redprint import RedPrint

api = RedPrint('book') # 自定义的红图

@api.route('/get')
def get_book() :
    # 按照restApi风格来说，URL尽量不能包含动词
    # 所以这里就不需要包含/get , / 即可
    return "I'm book"
