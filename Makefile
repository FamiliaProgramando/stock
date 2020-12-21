SHELL := /bin/bash

install:
	python3 -m venv ~/.venv
	( \
		source ~/.venv/bin/activate; \
		pip install -e .; \
		pip check; \
	)

initdb:
	# flask db init
	# flask db migrate
	FLASK_APP=stock/app flask db upgrade; \

shell:
	FLASK_APP=stock/app flask shell

run:
	FLASK_APP=stock/app flask run --host=0.0.0.0

clean:
	@find . -name '*.py[co]' -exec rm --force {} \;
	@find . -name '*~' -exec rm --force {} \;
	@find . -name '__pycache__' -exec rm -rf {} \;
	rm -rf *.egg-info
