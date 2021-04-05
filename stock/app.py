from flask import Flask
from flask_cors import CORS

from stock.ext import api, db, site, vue


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object("stock.config.DevConfig")

    db.init_app(app)
    api.init_app(app)
    site.init_app(app)
    vue.init_app(app)

    return app
