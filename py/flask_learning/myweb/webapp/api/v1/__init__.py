from webapp.api.v1 import user
from flask import Blueprint

def create_blueprint_v1() :
    bp_v1 = Blueprint('v1', __name__)    
    user.api.register(bp_v1)
    return bp_v1