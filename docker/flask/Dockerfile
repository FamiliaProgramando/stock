FROM python:latest

EXPOSE 8080
WORKDIR /app

ENV POSTGRES_USER="stock" POSTGRES_PASSWORD="stock" POSTGRES_HOST=postgres POSTGRES_PORT=5432 POSTGRES_DB="stock"

COPY requirements.txt ./requirements.txt
RUN pip install -r ./requirements.txt
# COPY . /app
# CMD make run

COPY dist/ ./dist/
COPY docker/flask/uwsgi.ini ./
RUN pip install dist/*

CMD ["uwsgi", "--ini", "/app/uwsgi.ini"]
