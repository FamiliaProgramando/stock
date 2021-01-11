#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" << EOSQL
    CREATE USER stock;
    CREATE DATABASE stock;
    GRANT ALL PRIVILEGES ON DATABASE stock TO stock;
EOSQL
