# stock

## Instalación

```bash
vagrant up
vagrant ssh

ln -s /vagrant_data stock
cd stock

make install
source ~/.venv/bin/activate

make initdb
```

## Ejecutar

```bash
make run
http://localhost:5000
```

## Finalizar

```bash
Ctrl+C
exit
vagrant halt
```
