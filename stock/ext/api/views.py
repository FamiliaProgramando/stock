from flask import request
from flask_restful import Resource, reqparse
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import UnmappedInstanceError

from stock.ext.db import db

from .models import Insumo, InsumoProveedor, Proceso, Proveedor, TipoInsumo

HTTP_RESPONSE_CREATED = 201
HTTP_RESPONSE_BAD_REQUEST = 400
HTTP_RESPONSE_NOT_FOUND = 404


class ApiProveedor(Resource):
    def get(self):
        args = request.args
        if args:
            proveedores = Proveedor.query.filter(
                Proveedor.nombre.like(f'%{args["nombre"]}%')).all()
        else:
            proveedores = Proveedor.query.all()

        data = [proveedor.json() for proveedor in proveedores]
        return {"proveedores": data}

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

        proveedor = Proveedor(nombre=data["nombre"].capitalize(),
                              telefono=data["telefono"],
                              email=data["email"].lower(),
                              pagina=data["pagina"])

        db.session.add(proveedor)
        db.session.commit()
        return {"created": proveedor.json()}, HTTP_RESPONSE_CREATED


class ApiProveedorId(Resource):
    def get(self, proveedor_id):
        try:
            proveedor = Proveedor.query.get(proveedor_id)
            return {"proveedor": proveedor.json()}
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

            proveedor.nombre = (data["nombre"].capitalize()
                                if data["nombre"] else proveedor.nombre)
            proveedor.telefono = (data["telefono"]
                                  if data["telefono"] else proveedor.telefono)
            proveedor.email = (data["email"].lower()
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
        except AssertionError:
            return {
                "error":
                "Acción no permitida. Hay insumos asociados a este proveedor!"
            }, HTTP_RESPONSE_BAD_REQUEST


class ApiProveedorIdInsumo(Resource):
    def get(self, proveedor_id):
        try:
            proveedor = Proveedor.query.get(proveedor_id)
            insumos = [insumo.json() for insumo in proveedor.insumos]
            return {"insumos": insumos}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND


class ApiInsumo(Resource):
    def get(self):
        insumos = Insumo.query.all()
        data = [insumo.json() for insumo in insumos]
        return {"insumos": data}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre",
                            type=str,
                            required=True,
                            help="Campo obligatorio!")
        parser.add_argument("marca", type=str)
        parser.add_argument("cantidad",
                            type=int,
                            required=True,
                            help="Campo obligatorio!")
        parser.add_argument("unidad", type=str)
        parser.add_argument("stock",
                            type=int,
                            required=True,
                            help="Campo obligatorio!")
        parser.add_argument("tipo_insumo_id",
                            type=int,
                            required=True,
                            help="Campo obligatorio!")
        parser.add_argument("proceso_id",
                            type=int,
                            required=True,
                            help="Campo obligatorio!")
        data = parser.parse_args()

        insumo = Insumo(nombre=data["nombre"].capitalize(),
                        marca=data["marca"].capitalize(),
                        cantidad=data["cantidad"],
                        unidad=data["unidad"].lower(),
                        stock=data["stock"],
                        tipo_insumo_id=data["tipo_insumo_id"],
                        proceso_id=data["proceso_id"])

        db.session.add(insumo)
        db.session.commit()
        return {"created": insumo.json()}, HTTP_RESPONSE_CREATED


class ApiInsumoId(Resource):
    def get(self, insumo_id):
        try:
            insumo = Insumo.query.get(insumo_id)
            return {"insumo": insumo.json()}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def put(self, insumo_id):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre", type=str)
        parser.add_argument("marca", type=str)
        parser.add_argument("cantidad", type=int)
        parser.add_argument("unidad", type=str)
        parser.add_argument("stock", type=int)
        parser.add_argument("tipo_insumo_id", type=int)
        parser.add_argument("proceso_id", type=int)

        data = parser.parse_args()

        try:
            insumo = Insumo.query.get(insumo_id)

            insumo.nombre = (data["nombre"].capitalize()
                             if data["nombre"] else insumo.nombre)
            insumo.marca = (data["marca"].capitalize()
                            if data["marca"] else insumo.marca)
            insumo.cantidad = (data["cantidad"]
                               if data["cantidad"] else insumo.cantidad)
            insumo.unidad = (data["unidad"].lower()
                             if data["unidad"] else insumo.unidad)
            insumo.stock = (data["stock"] if data["stock"] else insumo.stock)
            insumo.tipo_insumo_id = (data["tipo_insumo_id"]
                                     if data["tipo_insumo_id"] else
                                     insumo.tipo_insumo_id)
            insumo.proceso_id = (data["proceso_id"]
                                 if data["proceso_id"] else insumo.proceso_id)

            db.session.add(insumo)
            db.session.commit()
            return {"updated": insumo.json()}

        except (AttributeError, IntegrityError):
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def delete(self, insumo_id):
        try:
            insumo = Insumo.query.get(insumo_id)
            json = insumo.json()
            db.session.delete(insumo)
            db.session.commit()

            return {"deleted": json}

        # except (AttributeError, IntegrityError, UnmappedInstanceError):
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND


class ApiInsumoIdProveedor(Resource):
    def get(self, insumo_id):
        try:
            insumo = Insumo.query.get(insumo_id)
            proveedores = [
                proveedor.json() for proveedor in insumo.proveedores
            ]
            return {"proveedores": proveedores}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND


class ApiInsumoIdProveedorId(Resource):
    def get(self, insumo_id, proveedor_id):
        try:
            item = InsumoProveedor.query.get((insumo_id, proveedor_id))
            return {"item": item.json()}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def post(self, insumo_id, proveedor_id):
        parser = reqparse.RequestParser()
        parser.add_argument("precio",
                            type=float,
                            required=True,
                            help="Campo obligatorio!")
        data = parser.parse_args()

        item = InsumoProveedor(precio=data["precio"],
                               insumo_id=insumo_id,
                               proveedor_id=proveedor_id)

        db.session.add(item)
        db.session.commit()
        return {"created": item.json()}, HTTP_RESPONSE_CREATED

    def put(self, insumo_id, proveedor_id):
        parser = reqparse.RequestParser()
        parser.add_argument("precio", type=float)
        data = parser.parse_args()

        try:
            item = InsumoProveedor.query.get((insumo_id, proveedor_id))

            item.precio = (data["precio"] if data["precio"] else item.precio)

            db.session.add(item)
            db.session.commit()
            return {"updated": item.json()}

        except (AttributeError, IntegrityError):
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def delete(self, insumo_id, proveedor_id):
        try:
            item = InsumoProveedor.query.get((insumo_id, proveedor_id))
            json = item.json()
            db.session.delete(item)
            db.session.commit()

            return {"deleted": json}

        except (IntegrityError, UnmappedInstanceError):
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND


class ApiProceso(Resource):
    def get(self):
        procesos = Proceso.query.all()
        data = [proceso.json() for proceso in procesos]
        return {"procesos": data}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre",
                            type=str,
                            required=True,
                            help="Campo obligatorio!")
        data = parser.parse_args()

        if not data["nombre"]:
            return {"error": "Campo nombre vacío!"}, HTTP_RESPONSE_BAD_REQUEST

        try:
            proceso = Proceso(nombre=data["nombre"].lower(), )

            db.session.add(proceso)
            db.session.commit()
            return {"created": proceso.json()}, HTTP_RESPONSE_CREATED
        except IntegrityError:
            return {
                "error": "Acción no permitida. Recurso duplicado!"
            }, HTTP_RESPONSE_BAD_REQUEST


class ApiProcesoId(Resource):
    def get(self, proceso_id):
        try:
            proceso = Proceso.query.get(proceso_id)
            return {"proceso": proceso.json()}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def put(self, proceso_id):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre", type=str)

        data = parser.parse_args()

        try:
            proceso = Proceso.query.get(proceso_id)

            proceso.nombre = (data["nombre"].lower()
                              if data["nombre"] else proceso.nombre)

            db.session.add(proceso)
            db.session.commit()
            return {"updated": proceso.json()}

        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def delete(self, proceso_id):
        try:
            proceso = Proceso.query.get(proceso_id)
            db.session.delete(proceso)
            db.session.commit()
            return {"deleted": proceso.json()}

        except IntegrityError:
            return {
                "error":
                "Acción no permitida. Hay insumos asociados a este proceso!"
            }, HTTP_RESPONSE_BAD_REQUEST
        except UnmappedInstanceError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND


class ApiTipoInsumo(Resource):
    def get(self):
        tipos_insumo = TipoInsumo.query.all()
        data = [tipo.json() for tipo in tipos_insumo]
        return {"tipos_insumo": data}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre",
                            type=str,
                            required=True,
                            help="Campo obligatorio!")
        data = parser.parse_args()

        if not data["nombre"]:
            return {"error": "Campo nombre vacío!"}, HTTP_RESPONSE_BAD_REQUEST

        try:
            tipo = TipoInsumo(nombre=data["nombre"].lower(), )

            db.session.add(tipo)
            db.session.commit()
            return {"created": tipo.json()}, HTTP_RESPONSE_CREATED
        except IntegrityError:
            return {
                "error": "Acción no permitida. Recurso duplicado!"
            }, HTTP_RESPONSE_BAD_REQUEST


class ApiTipoInsumoId(Resource):
    def get(self, tipo_insumo_id):
        try:
            tipo = TipoInsumo.query.get(tipo_insumo_id)
            return {"tipo_insumo": tipo.json()}
        except AttributeError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def put(self, tipo_insumo_id):
        parser = reqparse.RequestParser()
        parser.add_argument("nombre", type=str)

        data = parser.parse_args()

        try:
            tipo = TipoInsumo.query.get(tipo_insumo_id)

            tipo.nombre = (data["nombre"].lower()
                           if data["nombre"] else tipo.nombre)

            db.session.add(tipo)
            db.session.commit()
            return {"updated": tipo.json()}

        except (AttributeError, IntegrityError):
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND

    def delete(self, tipo_insumo_id):
        try:
            tipo = TipoInsumo.query.get(tipo_insumo_id)
            db.session.delete(tipo)
            db.session.commit()
            return {"deleted": tipo.json()}

        except IntegrityError:
            return {
                "error":
                "Acción no permitida. Hay insumos asociados a este tipo_insumo!"
            }, HTTP_RESPONSE_BAD_REQUEST
        except UnmappedInstanceError:
            return {"error": "Recurso inexistente!"}, HTTP_RESPONSE_NOT_FOUND
