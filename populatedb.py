from random import choice, randint, random

from faker import Faker
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import FlushError

from stock.app import create_app
from stock.ext.api.models import (UNIDADES, Insumo, InsumoProveedor, Proceso,
                                  Proveedor, TipoInsumo)
from stock.ext.db import db


def main():
    app = create_app()
    fake = Faker("es_ES")

    procesos = [
        Proceso(nombre=nombre) for nombre in ("cocina", "envazado", "limpieza")
    ]

    tipos_insumo = [
        TipoInsumo(nombre=nombre)
        for nombre in ("lúpulos", "gas", "granos", "sales", "levaduras",
                       "tapitas", "azúcares", "detergentes", "sanitizantes",
                       "esponjas", "bases", "ácidos")
    ]

    with app.app_context():

        insu_n = 35 - len(Insumo.query.all())
        prov_n = 15 - len(Proveedor.query.all())
        asoc_n = 40 - len(InsumoProveedor.query.all())

        for proceso in procesos:
            try:
                db.session.add(proceso)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()

        for tipo in tipos_insumo:
            try:
                db.session.add(tipo)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()

        while insu_n > 0:
            insumo = Insumo(nombre=fake.word().capitalize(),
                            marca=fake.company(),
                            cantidad=randint(1, 100),
                            unidad=choice(UNIDADES),
                            stock=randint(1, 100),
                            tipo_insumo=choice(TipoInsumo.query.all()),
                            proceso=choice(Proceso.query.all()))
            try:
                db.session.add(insumo)
                db.session.commit()
            except IntegrityError as err:
                db.session.rollback()
            else:
                insu_n -= 1

        while prov_n > 0:
            profile = fake.profile()
            proveedor = Proveedor(nombre=profile["name"],
                                  telefono=fake.phone_number(),
                                  email=profile["mail"],
                                  pagina=profile["website"][0])
            try:
                db.session.add(proveedor)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
            else:
                prov_n -= 1

        insumos = Insumo.query.all()
        proveedores = Proveedor.query.all()

        while asoc_n > 0:
            insumo = choice(insumos)
            proveedor = choice(proveedores)

            if proveedor not in insumo.proveedores:
                asoc = InsumoProveedor(precio=random() * 100)
                asoc.proveedor = proveedor
                insumo.proveedores.append(asoc)
                try:
                    db.session.add(insumo)
                    db.session.commit()
                except (IntegrityError, FlushError):
                    db.session.rollback()
                else:
                    asoc_n -= 1


if __name__ == "__main__":
    main()
