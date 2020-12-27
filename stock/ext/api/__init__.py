from flask_restful import Api

from .models import (UNIDADES, Insumo, InsumoProveedor, Proceso, Proveedor,
                     TipoInsumo)
from .views import (ApiInsumo, ApiInsumoId, ApiInsumoIdProveedores,
                    ApiInsumoProveedor, ApiProceso, ApiProcesoId, ApiProveedor,
                    ApiProveedorId, ApiProveedorIdInsumos, ApiTipoInsumo,
                    ApiTipoInsumoId)

VERSION = "1"

api = Api()
api.add_resource(ApiProveedor, f"/api/v{VERSION}/proveedor")
api.add_resource(ApiProveedorId,
                 f"/api/v{VERSION}/proveedor/<int:proveedor_id>")
api.add_resource(ApiProveedorIdInsumos,
                 f"/api/v{VERSION}/proveedor/<int:proveedor_id>/insumos")

api.add_resource(ApiInsumo, f"/api/v{VERSION}/insumo")
api.add_resource(ApiInsumoId, f"/api/v{VERSION}/insumo/<int:insumo_id>")
api.add_resource(ApiInsumoIdProveedores,
                 f"/api/v{VERSION}/insumo/<int:insumo_id>/proveedores")

api.add_resource(ApiInsumoProveedor, f"/api/v{VERSION}/insumo_proveedor")

api.add_resource(ApiProceso, f"/api/v{VERSION}/proceso")
api.add_resource(ApiProcesoId, f"/api/v{VERSION}/proceso/<int:proceso_id>")

api.add_resource(ApiTipoInsumo, f"/api/v{VERSION}/tipo_insumo")
api.add_resource(ApiTipoInsumoId,
                 f"/api/v{VERSION}/tipo_insumo/<int:tipo_insumo_id>")


def init_app(app):
    api.init_app(app)
