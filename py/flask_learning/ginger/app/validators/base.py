from wtforms import Form
from flask import request
from app.libs.error_code import ParameterException

class BaseForm(Form) :
    def __init__(self) :
        data = request.json
        super().__init__(data=data)

    def validate_for_api(self) :
        valid = super().validate()
        if not valid :
            raise ParameterException(msg=self.errors)
        
        return self