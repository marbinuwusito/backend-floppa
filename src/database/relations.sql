ALTER TABLE usuarios
   ADD CONSTRAINT FK_usuario
   FOREIGN KEY (codigoReceta) REFERENCES recetas (id);

ALTER TABLE comunidades
   ADD CONSTRAINT FK_comunidades
   FOREIGN KEY (codigoUsuario) REFERENCES comunidades (id);