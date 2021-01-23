# stock

## Instalación

Para la instalación del aplicativo es necesaria la instalación previa
de VirtualBox y Vagrant.

El siguiente procedimiento va a iniciar la VM, instalar la API y sus
dependencias, y popular la base de datos con información fake para
tests.

```bash
git clone https://github.com/FamiliaProgramando/stock.git
cd stock

vagrant up
vagrant ssh

ln -s /vagrant_data stock
cd stock

make install
source ~/.venv/bin/activate
```

## Banco de datos

Es necesario adicionar un archivo `.env` con las variables de ambiente,
como llave secreta, los datos de conección al banco de datos (usuario, seña,
host, puerto, nombre del banco), tanto para ambiente de desarrollo
como para ambiente de producción.

```bash
SECRET_KEY="super-secret-key"
DEV_DATABASE_URI="postgresql+psycopg2://stock:stock@localhost:5432/stock"
PROD_DATABASE_URI=

```
## Back up

```bash
sudo su - postgres
pg_dump stock > dump_file
cp dump_file /home/vagrant/stock
exit
```
## Eliminar datos existentes

```bash
psql stock
select * from proveedor;
delete from proveedor;
\q
exit
```

## Borrar tablas

```bash
psql stock
drop table insumo_proveedor;
drop type unidades;
\q
exit
```

## Restaurar Back up

```bash
sudo su - postgres
cp /home/vagrant/stock/dump_file .
psql stock < dump_file
```

Los siguientes comandos crean las tablas, las relaciones y introducen
algunos datos fake para testar el funcionamiento del banco de datos:

```bash
make updb
python populatedb.py
```

### Línea de comandos SQL

Para entrar en la línea de comandos de PostgreSQL (opcional):

```bash
sudo su - postgres
psql stock
\dt     # para listar las tablas
\q      # para salir
```

## Ejecutar

```bash
make run
```

## Tests

Para testar la API importar los archivo json del Postman,
tanto `postman_collections` como `postman_environment`.

## Inspeccionar

```bash
git fetch
```

## Finalizar

```bash
Ctrl+C
exit
vagrant halt
```

## Reiniciar
```
vagrant reload
```
## Confirmar estado
```
vagrant status
```


## Destruir
```
vagrant destroy
```

## Comandos GIT
```
    git init
    git clone <url>
    git status
    git add nombre_archivo
    git commit
    git pull origin main
    git push origin main
    git log
    git log --oneline --decorate --graph --all
    git remote -v
    git branch
    git checkout -b <nombre>
    git checkout <nombre>
    git merge <nombre>
```

# API

## Proveedores

```
{:nombre, :telefono, :email, :pagina}

GET    /api/v1/proveedor
POST   /api/v1/proveedor

GET    /api/v1/proveedor/id
PUT    /api/v1/proveedor/id
DELETE /api/v1/proveedor/id

GET    /api/v1/proveedor/id/insumo
```

## Insumos

```
{:nombre, :marca, :cantidad, :unidad, :stock, :tipo_insumo_id, :proceso_id}

GET    /api/v1/insumo
POST   /api/v1/insumo

GET    /api/v1/insumo/id
PUT    /api/v1/insumo/id
DELETE /api/v1/insumo/id

GET    /api/v1/insumo/id/proveedor
```

## Insumo/Proveedor

```bash
{:precio}

POST   /api/v1/insumo/id/proveedor/id
PUT    /api/v1/insumo/id/proveedor/id
DELETE /api/v1/insumo/id/proveedor/id
```

## Tipo Insumos

```
{:nombre}

GET    /api/v1/insumo_tipo
POST   /api/v1/insumo_tipo

GET    /api/v1/insumo_tipo/id
PUT    /api/v1/insumo_tipo/id
DELETE /api/v1/insumo_tipo/id
```

## Procesos

```
{:nombre}

GET    /api/v1/proceso
POST   /api/v1/proceso

GET    /api/v1/proceso/id
PUT    /api/v1/proceso/id
DELETE /api/v1/proceso/id
```
