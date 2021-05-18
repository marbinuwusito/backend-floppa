ALTER TABLE recetas
   ADD CONSTRAINT FK_recetas
   FOREIGN KEY (codigoUsuario) REFERENCES usuarios (id) ON UPDATE CASCADE;
