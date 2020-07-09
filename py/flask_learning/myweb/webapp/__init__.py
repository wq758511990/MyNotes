from flask import Flask

def register_plugin(app) :
    from webapp.models.base import db
    db.init_app(app)
    with app.app_context() :
        db.create_all()

def register_blueprints(app) :
    from .api.v1 import create_blueprint_v1
    app.register_blueprint(create_blueprint_v1(), url_prefix="/v1")

def create_app() :
    app = Flask(__name__)
    # 配置要先于 register_plugin 导入
    app.config.from_object('webapp.configs.secure')
    app.config.from_object('webapp.configs.settings')


    register_blueprints(app)
    register_plugin(app)

    return app