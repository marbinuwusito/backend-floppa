INSERT INTO recetas (nombre, pasos, ingredientes, description, imgURL)
VALUES ('pollo frito', '- preparamos el pollo\r\n - lo calentamos \r\n - ...', '- pollo \r\n - awa \r\n - ...', 'Pollo para comer frito', 'http://localhost:3050/public/pollo.png');

INSERT INTO usuarios (nombre, pais, biografia, codigoReceta, imgURL)
VALUES ('marbin', 'sv', 'fasodjfnasodpifnasdipofuasnduifbadsifb', 1, 'http://localhost:3050/public/floppaUser.png');

INSERT INTO comunidades (nombre, miembros, codigoUsuario, imgURL)
VALUES ('Veganos', 10, 1, 'http://localhost:3050/public/veganos.png');
