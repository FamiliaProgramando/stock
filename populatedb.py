# from flask import current_app
from stock.app import create_app
from stock.ext.api.models import (Insumo, Proceso, Proveedor, TipoInsumo,
                                  proveedor_insumo)
from stock.ext.db import db

procesos = [
    Proceso(nombre="cocina"),
    Proceso(nombre="envazado"),
    Proceso(nombre="limpieza"),
]

tipos_insumo = [
    TipoInsumo(nombre="lúpulo"),
    TipoInsumo(nombre="gas"),
    TipoInsumo(nombre="granos"),
    TipoInsumo(nombre="sales"),
    TipoInsumo(nombre="levadura"),
    TipoInsumo(nombre="tapitas"),
    TipoInsumo(nombre="azúcar"),
    TipoInsumo(nombre="detergente"),
    TipoInsumo(nombre="sanitizante"),
    TipoInsumo(nombre="esponjita"),
    TipoInsumo(nombre="base"),
    TipoInsumo(nombre="ácido"),
]

proveedores = [
    Proveedor(nombre="Fulano de Tal",
              telefono="9 456 1234",
              email="fulano@gmail.com",
              pagina="http://fulano.com"),
]

insumos = [
    Insumo(nombre="Amethist",
           marca="Amth",
           cantidad=250,
           unidad="gr",
           stock=12,
           tipo_insumo=tipos_insumo[0],
           proceso=procesos[0]),
]

app = create_app()

with app.app_context():
    for proceso in procesos:
        db.session.add(proceso)
    db.session.commit()

    for tipo in tipos_insumo:
        db.session.add(tipo)
    db.session.commit()

    for proveedor in proveedores:
        db.session.add(proveedor)
    db.session.commit()

    for insumo in insumos:
        db.session.add(insumo)
    db.session.commit()
