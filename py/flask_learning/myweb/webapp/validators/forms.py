from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, length, Email, Regexp
from webapp.libs.enums import ClientTypeEnum
from webapp.validators.base import BaseForm as Form

class ClientForm(Form) :
    account = StringField(validators=[DataRequired(), length(min=5, max=32)])
    secret = StringField()
    login_type = IntegerField(validators=[DataRequired()])

    def validate_login_type(self, value):
        try :
            client = ClientTypeEnum(value.data)
        except ValueError as e :
            raise e

        self.login_type.data = client

class UserEmailForm(ClientForm) :
    account = StringField(validators=[DataRequired()])
    secret = StringField(validators=[
        DataRequired(),
        # password can only include letters , numbers and "_"
        Regexp(r'^[A-Za-z0-9_*&$#@]{6,22}$')
    ])
    nickname = StringField(validators=[DataRequired(),
                                       length(min=2, max=22)])