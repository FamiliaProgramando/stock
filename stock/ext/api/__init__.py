from flask_restful import Api

# from .models import Insumo, Proceso, Proveedor, proveedor_insumo, TipoInsumo

api = Api()


def init_app(app):
    api.init_app(app)
