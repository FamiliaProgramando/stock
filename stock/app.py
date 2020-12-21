from flask import Flask

from stock.ext import api, db


def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevConfig")

    api.init_app(app)
    db.init_app(app)

    return app
