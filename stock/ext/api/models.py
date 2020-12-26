from stock.ext.db import db

UNIDADES = ["kg", "gr", "ltr", "ml"]


class Proceso(db.Model):
    __tablename__ = "proceso"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(50), nullable=False, unique=True)

    def json(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }

    def __repr__(self):
        return f"{self.nombre}"


class TipoInsumo(db.Model):
    __tablename__ = "tipo_insumo"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(50), nullable=False, unique=True)

    def json(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }

    def __repr__(self):
        return f"{self.nombre}"


class Proveedor(db.Model):
    __tablename__ = "proveedor"

    id = db.Column("id", db.Integer, primary_key=True)
    nombre = db.Column("nombre", db.String(50), nullable=False, unique=True)
    telefono = db.Column("telefono", db.String(50), unique=True)
    email = db.Column("email", db.String(255), unique=True)
    pagina = db.Column("pagina", db.String(255), unique=True)

    insumos = db.relationship("InsumoProveedor", back_populates="proveedor")

    # insumo = db.relationship("Insumo",
    #                          secondary="insumo_proveedor",
    #                          lazy="subquery",
    #                          backref=db.backref("proveedores", lazy=True))

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
    nombre = db.Column("nombre", db.String(50), nullable=False, unique=True)
    marca = db.Column("marca", db.String(50))
    cantidad = db.Column("cantidad", db.Integer(), nullable=False)
    unidad = db.Column("unidad",
                       db.Enum(*UNIDADES, name="unidades"))
    stock = db.Column("stock", db.Integer(), nullable=False)

    proveedores = db.relationship("InsumoProveedor", back_populates="insumo")
    # proveedores = db.relationship("Proveedor",
    #                               secondary="insumo_proveedor",
    #                               lazy="subquery",
    #                               backref=db.backref("insumos", lazy=True))

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

    def json(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "marca": self.marca,
            "cantidad": self.cantidad,
            "unidad": self.unidad,
            "stock": self.stock,
            "tipo_insumo": self.tipo_insumo.nombre,
            "proceso": self.proceso.nombre,
        }

    def __repr__(self):
        return f"{self.nombre}"


class InsumoProveedor(db.Model):
    __tablename__ = "insumo_proveedor"

    insumo_id = db.Column("insumo_id",
                          db.Integer,
                          db.ForeignKey("insumo.id"),
                          primary_key=True)
    insumo = db.relationship("Insumo", back_populates="proveedores")

    proveedor_id = db.Column("proveedor_id",
                             db.Integer,
                             db.ForeignKey("proveedor.id"),
                             primary_key=True)
    proveedor = db.relationship("Proveedor", back_populates="insumos")

    precio = db.Column("precio", db.Numeric(10, 2), nullable=False)

    def json(self):
        return {
            "insumo": self.insumo.nombre,
            "proveedor": self.proveedor.nombre,
            "precio": float(self.precio),
            "insumo_id": self.insumo_id,
            "proveedor_id": self.proveedor_id,
        }

    def __repr__(self):
        return f"{self.insumo.nombre} de {self.proveedor.nombre} = $ {self.precio}"

