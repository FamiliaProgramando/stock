from flask import Blueprint, render_template
from flask_cors import cross_origin

bp = Blueprint("vue", __name__)


def init_app(app):
    app.register_blueprint(bp)


@bp.route("/")
@cross_origin()
def index():
    return render_template("index.html", title="Sierra Maestra")
