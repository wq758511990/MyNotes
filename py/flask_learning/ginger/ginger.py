from app import create_app
from app.libs.error import APIException
from app.libs.error_code import ServerError
from werkzeug.exceptions import HTTPException
app = create_app()

# 全局异常处理
@app.errorhandler(Exception) # 用python的基类Exception， 捕获所有异常
def framework_error(e) :
    # 1、APIException
    # 2、HTTPException
    # 3、Exception
    if isinstance(e, APIException) :
        return e
    elif isinstance(e, HTTPException) :
        code = e.code
        msg = e.description
        error_code = 1007
        return APIException(msg, code, error_code)
    else :
        # 调试模式和非调试模式区分返回
        if not app.config['DEBUG'] :
            return ServerError()
        else :
            raise e
    

if __name__ == '__main__' :
    app.run(debug=True, host='0.0.0.0', port=8000)