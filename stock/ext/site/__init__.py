from flask import Blueprint, render_template, jsonify

bp = Blueprint("site", __name__)


def init_app(app):
    app.register_blueprint(bp)


@bp.route("/")
def index():
    return render_template("index.html", title="Sierra Maestra")


@bp.route("/nueva-coccion")
def nueva_coccion():
    return render_template("nuevaCoccion.html", title="Sierra Maestra")

@bp.route("/envasado")
def envasado():
    return render_template("envasado.html", title="Sierra Maestra")

@bp.route("/ejemplo")
def ejemplo():
    return render_template("ejemplo.html", title="Ejemplo")

@bp.route("/stock")
def stock():
    return render_template("stock.html", title="Sierra Maestra")

@bp.route("/registro")
def registro():
    return render_template("registro.html", title="Sierra Maestra")

@bp.route("/recetas")
def recetas():
    return render_template("recetas.html", title="Sierra Maestra")

@bp.route("/proveedores")
def proveedores():
    return render_template("proveedores.html", title="Sierra Maestra")

@bp.route("/insumos")
def insumos():
    return render_template("insumos.html", title="Sierra Maestra")

@bp.route("/mensaje")
def mensaje():
    return jsonify('Nuevo Mensaje desde un servidor')
