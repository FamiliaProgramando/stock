from flask import Blueprint, render_template

bp = Blueprint("site", __name__)


def init_app(app):
    app.register_blueprint(bp)


@bp.route("/")
def index():
    return render_template("index.html", title="Sierra Maestra")


@bp.route("/nueva-coccion")
def nueva_coccion():
    return render_template("nuevaCocccion.html", title="Sierra Maestra")
