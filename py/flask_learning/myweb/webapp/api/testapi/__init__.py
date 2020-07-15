from flask import Blueprint
from webapp.api.testapi import test

def create_blueprint_test() :
    bp_test = Blueprint('test', __name__)
    test.api.register(bp_test, url_prefix='/testapi')
    return bp_test