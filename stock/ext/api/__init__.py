from flask_restful import Api

# from .models import Insumo, Proceso, Proveedor, proveedor_insumo, TipoInsumo
from .views import ApiProveedor

VERSION = "1.0"

api = Api()
api.add_resource(ApiProveedor, f"/api/v{VERSION}/proveedor")


def init_app(app):
    api.init_app(app)
