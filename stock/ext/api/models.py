from stock.ext.db import db

proveedor_insumo = db.Table(
    "proveedor_insumo", db.Column("precio", db.Numeric(10, 2), nullable=False),
    db.Column("proveedor_id",
              db.Integer,
              db.ForeignKey("proveedor.id"),
              primary_key=True),
    db.Column("insumo_id",
              db.Integer,
              db.ForeignKey("insumo.id"),
              primary_key=True))


class Proceso(db.Model):
    __tablename__ = "proceso"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(25), nullable=False, unique=True)

    def __repr__(self):
        return f"{self.nombre}"


class TipoInsumo(db.Model):
    __tablename__ = "tipo_insumo"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(25), nullable=False, unique=True)

    def __repr__(self):
        return f"{self.nombre}"


class Proveedor(db.Model):
    __tablename__ = "proveedor"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(25), nullable=False, unique=True)
    telefono = db.Column("telefono", db.String(25), unique=True)
    email = db.Column("email", db.String(255), unique=True)
    pagina = db.Column("pagina", db.String(255), unique=True)

    def json(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "telefono": self.telefono,
            "email": self.email,
            "pagina": self.pagina,
        }

    def __repr__(self):
        return f"{self.nombre}"


class Insumo(db.Model):
    __tablename__ = "insumo"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(25), nullable=False, unique=True)
    marca = db.Column("marca", db.String(25))
    cantidad = db.Column("cantidad", db.Integer(), nullable=False)
    unidad = db.Column("unidad",
                       db.Enum("kg", "gr", "ltr", "ml", name="unidades"))
    stock = db.Column("stock", db.Integer(), nullable=False)

    proveedores = db.relationship("Proveedor",
                                  secondary=proveedor_insumo,
                                  lazy="subquery",
                                  backref=db.backref("insumos", lazy=True))

    tipo_insumo_id = db.Column("tipo_insumo_id",
                               db.Integer,
                               db.ForeignKey("tipo_insumo.id"),
                               nullable=False)
    tipo_insumo = db.relationship("TipoInsumo",
                                  backref=db.backref(
                                      "insumos",
                                      cascade="all, delete-orphan",
                                      lazy=True))

    proceso_id = db.Column("proceso_id",
                           db.Integer,
                           db.ForeignKey("proceso.id"),
                           nullable=False)
    proceso = db.relationship("Proceso",
                              backref=db.backref("insumos",
                                                 cascade="all, delete-orphan",
                                                 lazy=True))

    def __repr__(self):
        return f"{self.nombre}"
