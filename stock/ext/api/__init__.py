from flask_restful import Api

# from .models import Insumo, Proceso, Proveedor, proveedor_insumo, TipoInsumo
from .views import ApiProveedor, ApiProveedorId, ApiInsumo, ApiInsumoId

VERSION = "1"

api = Api()
api.add_resource(ApiProveedor, f"/api/v{VERSION}/proveedor")
api.add_resource(ApiProveedorId, f"/api/v{VERSION}/proveedor/<int:proveedor_id>")
api.add_resource(ApiInsumo, f"/api/v{VERSION}/insumo")
api.add_resource(ApiInsumoId, f"/api/v{VERSION}/insumo/<int:insumo_id>")


def init_app(app):
    api.init_app(app)
