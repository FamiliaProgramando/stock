from flask_restful import Resource, reqparse
from .models import Insumo, Proceso, Proveedor, proveedor_insumo, TipoInsumo
from stock.ext.db import db

HTTP_RESPONSE_CREATED = 201
HTTP_RESPONSE_NOT_FOUND = 404


class ApiProveedor(Resource):
    def get(self):
        proveedores = Proveedor.query.all()
        data = [proveedor.json() for proveedor in proveedores]
        return {"resources": data}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre",
                            type=str,
                            required=True,
                            help="Campo obligatorio!")
        parser.add_argument("telefono",
                            type=str,
                            help="Formato texto esperado!")
        parser.add_argument("email",
                            type=str,
                            help="Formato texto esperado!")
        parser.add_argument("pagina",
                            type=str,
                            help="Formato texto esperado!")
        data = parser.parse_args()
        print(data)

        proveedor = Proveedor(
            nombre=data["nombre"],
            telefono=data["telefono"],
            email=data["email"],
            pagina=data["pagina"],
        )

        db.session.add(proveedor)
        db.session.commit()
        return {"created": proveedor.json()}, HTTP_RESPONSE_CREATED


class ApiProveedorId(Resource):
    def get(self, proveedor_id):
        ...

    def put(self, proveedor_id):
        ...

    def delete(self, proveedor_id):
        ...


class ApiProceso(Resource):
    def get(self):
        ...

    def post(self):
        ...


class ApiProcesoId(Resource):
    def get(self, proceso_id):
        ...

    def put(self, proceso_id):
        ...

    def delete(self, proceso_id):
        ...


class ApiTipoInsumo(Resource):
    def get(self):
        ...

    def post(self):
        ...


class ApiTipoInsumoId(Resource):
    def get(self, tipo_insumo_id):
        ...

    def put(self, tipo_insumo_id):
        ...

    def delete(self, tipo_insumo_id):
        ...


class ApiInsumo(Resource):
    def get(self):
        ...

    def post(self):
        ...


class ApiInsumoId(Resource):
    def get(self, insumo_id):
        ...

    def put(self, insumo_id):
        ...

    def delete(self, insumo_id):
        ...
