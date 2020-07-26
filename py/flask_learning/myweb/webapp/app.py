from flask import Flask as _Flask
from flask.json import JSONEncoder as _JSONEncoder
from webapp.libs.error_code import ServerError
from datetime import date

class JSONEncoder(_JSONEncoder) :
    def default(self, o) :
        if hasattr(o, 'keys') and hasattr(o, '__getitem__'):
            return dict(o)
        if isinstance(o, date):
            return o.strftime('%Y-%m-%d')
        raise ServerError()

class Flask(_Flask) :
    # 这里修改json的 JSONEncoder 为 我们这里指定的JSONEncoder， 这样就可以直接用json 实例化数据模型, 前提是数据模型中有 keys 和 __getitem__
    # __init__.py 中就引入这里的Flask 来实例化核心对象
    json_encoder = JSONEncoder