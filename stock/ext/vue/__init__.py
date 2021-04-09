from flask import Blueprint, render_template, jsonify
from flask_cors import cross_origin
from flask_cors import CORS

bp = Blueprint("vue", __name__, template_folder='./templates/vue_template')
# vue_front_end = Blueprint("vue", __name__, template_folder='./templates/vue_template')
# vue_front_end = Blueprint("vue", "vue", template_folder='templates/vue_template')
# CORS(vue_front_end)


def init_app(app):
    app.register_blueprint(bp)


# @bp.route("/vue")
# # @cross_origin()
# def get_vue():
#     try:
#         return render_template('vue_template/index.html')
#     except TemplateNotFound:
#         abort(404)

@bp.route('/vue', defaults={'path': ''})
@bp.route('/<path:path>')
def catch_all(path):
    try:
        return render_template("vue_template/index.html")
    except TemplateNotFound:
        abort(404)


@bp.route("/vue/mensaje")
@cross_origin()
def mensaje():
    # jsonify('Nuevo Mensaje desde un servidor')
    return {"mensaje": "Hello from Flask!"}

