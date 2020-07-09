from flask import Flask

def register_blueprints(app) :
    from .api.v1 import create_blueprint_v1
    app.register_blueprint(create_blueprint_v1(), url_prefix="/v1")

def create_app() :
    app = Flask(__name__)
    register_blueprints(app)
    return app