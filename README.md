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

make updb
python populardb.py
```

## Ejecutar

Para ejecutar la API antes es necesario adicionar un archivo `.env` con
las siguientes variables de ambiente:

```bash
SECRET_KEY="super-secret-key"
DEV_DATABASE_URI="postgresql://stock:stock@localhost:5432/stock"
PROD_DATABASE_URI=

```

A continuación:

```bash
make run
```

## Tests

Para testar la API usar importar el archivo json para Postman.

## Finalizar

```bash
Ctrl+C
exit
vagrant halt
```
