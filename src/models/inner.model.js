const connection = require('../database/connection');

let dataModel = {

   getUserReceta: (callback) => {

      if (connection) {

         let sql = `SELECT recetas.id, recetas.nombre, recetas.description FROM recetas INNER JOIN usuarios ON recetas.codigoUsuario = usuarios.id WHERE usuarios.id = 1;`
         connection.query(sql, (error, rows) => {
            if (error) throw error
            callback(rows);
         });

      }

   },
   getRecetaUser: (callback) => {

      if (connection) {
         let sql = `SELECT usuarios.id, usuarios.nombre FROM usuarios INNER JOIN recetas ON usuarios.id = recetas.codigoUsuario`

         connection.query(sql, (error, rows) => {
            if (error) throw error
            callback(rows)
         })

      }
   }

}

module.exports = dataModel;
