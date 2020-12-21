import os
from flask import Flask
# from pprint import pprint


def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevConfig")
    # pprint(app.config)

    return app
