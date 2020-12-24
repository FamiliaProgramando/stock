from flask_restful import Resource, reqparse
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import UnmappedInstanceError
from .models import Insumo, Proceso, Proveedor, InsumoProveedor, TipoInsumo
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
        parser.add_argument("telefono", type=str)
        parser.add_argument("email", type=str)
        parser.add_argument("pagina", type=str)
        data = parser.parse_args()

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
        try:
            proveedor = Proveedor.query.get(proveedor_id)
            return {"resource": proveedor.json()}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def put(self, proveedor_id):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre", type=str)
        parser.add_argument("telefono", type=str)
        parser.add_argument("email", type=str)
        parser.add_argument("pagina", type=str)

        data = parser.parse_args()

        try:
            proveedor = Proveedor.query.get(proveedor_id)

            proveedor.nombre = (data["nombre"]
                                if data["nombre"] else proveedor.nombre)
            proveedor.telefono = (data["telefono"]
                                  if data["telefono"] else proveedor.telefono)
            proveedor.email = (data["email"]
                               if data["email"] else proveedor.email)
            proveedor.pagina = (data["pagina"]
                                if data["pagina"] else proveedor.pagina)

            db.session.add(proveedor)
            db.session.commit()
            return {"updated": proveedor.json()}

        except (AttributeError, IntegrityError):
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def delete(self, proveedor_id):
        try:
            proveedor = Proveedor.query.get(proveedor_id)
            db.session.delete(proveedor)
            db.session.commit()
            return {"deleted": proveedor.json()}

        except (IntegrityError, UnmappedInstanceError):
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND


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
