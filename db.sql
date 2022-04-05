--CREATE DATABASE servicios;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    username varchar(255) NOT NULL UNIQUE,
    contraseña varchar(255) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    fechaCreacion varchar(255) NOT NULL
);
