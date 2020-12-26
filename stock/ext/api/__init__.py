from flask_restful import Api

from .models import Insumo, InsumoProveedor, Proceso, Proveedor, TipoInsumo, UNIDADES
from .views import (ApiInsumo, ApiInsumoId, ApiInsumoProveedor, ApiProceso,
                    ApiProcesoId, ApiProveedor, ApiProveedorId, ApiTipoInsumo,
                    ApiTipoInsumoId)

VERSION = "1"

api = Api()
api.add_resource(ApiProveedor, f"/api/v{VERSION}/proveedor")
api.add_resource(ApiProveedorId,
                 f"/api/v{VERSION}/proveedor/<int:proveedor_id>")
api.add_resource(ApiInsumo, f"/api/v{VERSION}/insumo")
api.add_resource(ApiInsumoId, f"/api/v{VERSION}/insumo/<int:insumo_id>")
api.add_resource(ApiInsumoProveedor, f"/api/v{VERSION}/insumo_proveedor")
api.add_resource(ApiProceso, f"/api/v{VERSION}/proceso")
api.add_resource(ApiProcesoId, f"/api/v{VERSION}/proceso/<int:proceso_id>")
api.add_resource(ApiTipoInsumo, f"/api/v{VERSION}/tipo_insumo")
api.add_resource(ApiTipoInsumoId,
                 f"/api/v{VERSION}/tipo_insumo/<int:tipo_insumo_id>")


def init_app(app):
    api.init_app(app)
