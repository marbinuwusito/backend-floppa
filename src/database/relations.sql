ALTER TABLE usuarios
   ADD CONSTRAINT FK_usuario
   FOREIGN KEY (codigoReceta) REFERENCES recetas (id) ON UPDATE CASCADE;

ALTER TABLE comunidades
   ADD CONSTRAINT FK_comunidades
   FOREIGN KEY (codigoUsuario) REFERENCES comunidades (id) ON UPDATE CASCADE;
