from flask_restful import Api

# from .models import Insumo, Proceso, Proveedor, proveedor_insumo, TipoInsumo
from .views import ApiProveedor, ApiProveedorId

VERSION = "1.0"

api = Api()
api.add_resource(ApiProveedor, f"/api/v{VERSION}/proveedor")
api.add_resource(ApiProveedorId, f"/api/v{VERSION}/proveedor/<int:proveedor_id>")


def init_app(app):
    api.init_app(app)
