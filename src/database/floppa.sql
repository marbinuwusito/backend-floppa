CREATE DATABASE TEST1;

USE TEST1;

CREATE TABLE usuarios(
   id INT NOT NULL AUTO_INCREMENT,
   nombre VARCHAR(90),
   fechaDeCreacion DATETIME DEFAULT DATE(CURRENT_TIMESTAMP),
   pais VARCHAR(40),
   biografia TEXT,
   codigoReceta INT,
   PRIMARY KEY (id)
);

CREATE TABLE comunidades(
   id INT NOT NULL AUTO_INCREMENT,
   nombre VARCHAR(90),
   miembros INT NOT NULL DEFAULT 0,
   codigoUsuario INT,
   imgURL VARCHAR(255),
   PRIMARY KEY (id)
);

CREATE TABLE recetas(
   id INT NOT NULL AUTO_INCREMENT,
   nombre VARCHAR(40),
   calificacion FLOAT,
   pasos TEXT,
   ingredientes TEXT,
   description TEXT,
   imgURL VARCHAR(255),
   PRIMARY KEY (id)
);
