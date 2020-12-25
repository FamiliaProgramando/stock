from random import random, randint, choice
from faker import Faker

from stock.app import create_app
from stock.ext.api.models import (Insumo, InsumoProveedor, Proceso, Proveedor,
                                  TipoInsumo, UNIDADES)
from stock.ext.db import db

fake = Faker("es_ES")

procesos = [
    Proceso(nombre=nombre) for nombre in ("cocina", "envazado", "limpieza")
]
tipos_insumo = [
    TipoInsumo(nombre=nombre)
    for nombre in ("lúpulos", "gas", "granos", "sales", "levaduras", "tapitas",
                   "azúcares", "detergentes", "sanitizantes", "esponjas",
                   "bases", "ácidos")
]

proveedores = []

for _ in range(15):
    profile = fake.profile()
    proveedores.append(
        Proveedor(nombre=profile["name"],
                  telefono=fake.phone_number(),
                  email=profile["mail"],
                  pagina=profile["website"][0]))

insumos = []

for _ in range(35):
    insumos.append(
        Insumo(nombre=fake.company(),
               marca=fake.word().capitalize(),
               cantidad=randint(1, 100),
               unidad=choice(UNIDADES),
               stock=randint(1, 100),
               tipo_insumo=choice(tipos_insumo),
               proceso=choice(procesos)))

app = create_app()

with app.app_context():
    for proceso in procesos:
        db.session.add(proceso)

    for tipo in tipos_insumo:
        db.session.add(tipo)

    for proveedor in proveedores:
        db.session.add(proveedor)

    for insumo in insumos:
        db.session.add(insumo)
        asoc = InsumoProveedor(precio=random() * 100)
        asoc.proveedor = choice(proveedores)
        insumo.proveedores.append(asoc)

    db.session.commit()
