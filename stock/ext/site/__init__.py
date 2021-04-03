from flask import Blueprint, render_template
from flask_cors import cross_origin

bp = Blueprint("site", __name__)


def init_app(app):
    app.register_blueprint(bp)


@bp.route("/")
@cross_origin()
def index():
    return render_template("index.html", title="Sierra Maestra")


@bp.route("/nueva-coccion")
@cross_origin()
def nueva_coccion():
    return render_template("nuevaCoccion.html", title="Sierra Maestra")

@bp.route("/envasado")
@cross_origin()
def envasado():
    return render_template("envasado.html", title="Sierra Maestra")

@bp.route("/ejemplo")
@cross_origin()
def ejemplo():
    return render_template("ejemplo.html", title="Ejemplo")

@bp.route("/stock")
@cross_origin()
def stock():
    return render_template("stock.html", title="Sierra Maestra")

@bp.route("/registro")
@cross_origin()
def registro():
    return render_template("registro.html", title="Sierra Maestra")

@bp.route("/recetas")
@cross_origin()
def recetas():
    return render_template("recetas.html", title="Sierra Maestra")

@bp.route("/proveedores")
@cross_origin()
def proveedores():
    return render_template("proveedores.html", title="Sierra Maestra")

@bp.route("/insumos")
@cross_origin()
def insumos():
    return render_template("insumos.html", title="Sierra Maestra")
