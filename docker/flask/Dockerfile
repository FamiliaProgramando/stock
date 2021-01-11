FROM python:latest

EXPOSE 8080
WORKDIR /app

# ENV POSTGRES_USER="stock" POSTGRES_PASSWORD="stock" POSTGRES_HOST=postgres POSTGRES_PORT=5432 POSTGRES_DB="stock"
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY requirements.txt ./requirements.txt
RUN pip install -r ./requirements.txt
COPY . /app
# CMD make run

# python setup.py sdist
# COPY dist/ ./dist/
COPY docker/flask/uwsgi.ini ./
# RUN pip install dist/*

CMD ["uwsgi", "--ini", "/app/uwsgi.ini"]
