from webapp import create_app
from webapp.libs.error import APIException
from webapp.libs.error_code import ServerError
from werkzeug.exceptions import HTTPException

app = create_app()

@app.errorhandler(Exception)
def frameword_error(e) :
    if isinstance(e, APIException) :
        return e
    elif isinstance(e, HTTPException) :
        code = e.code
        msg = e.description
        error_code = 1007
        return APIException(code, msg, error_code)
    else :
        print('serverErr')
        if not app.config['DEBUG'] :
            return ServerError()
        raise e


if __name__ == "__main__":
    app.run(debug=True, port=8777, host='0.0.0.0')
