from flask import Flask

from stock.ext import api, db, site


def create_app():
    app = Flask(__name__)
    app.config.from_object("stock.config.DevConfig")

    db.init_app(app)
    api.init_app(app)
    site.init_app(app)

    return app
