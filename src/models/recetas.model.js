const connection = require('../database/connection');

let dataModel = {

   getRecetas: (callback) => {

      if (connection) {
         let sql = 'SELECT * FROM recetas';
         connection.query(sql, (error, rows) => {
            if (error) throw error
            callback(rows);
         });
      }

   },

   getOneReceta: (data, callback) => {

      if (connection) {
         let sql = `SELECT * FROM recetas WHERE id = ${connection.escape(data)}`
         connection.query(sql, (error, rows) => {
            if (error) throw error
            callback(rows);
         });
      }
   },

   addReceta : (data, callback) => {

      if (connection) {

         let sql = `INSERT INTO recetas (nombre, pasos, ingredientes, description, imgURL) VALUES(${connection.escape(data.nombre)}, ${connection.escape(data.pasos)}, ${connection.escape(data.ingredientes)}, ${connection.escape(data.description)}, ${connection.escape(data.imgURL)})`;

         connection.query(sql, (error) => {

            if (error) throw error
            callback({ message: "receta added" });

         })
      }

   },

   editReceta: (data, callback) => {

      if (connection) {

         let sql = `UPDATE recetas SET nombre = ${connection.escape(data.nombre)}, pasos = ${connection.escape(data.pasos)}, ingredientes = ${connection.escape(data.ingredientes)}, description = ${connection.escape(data.description)}, imgURL = ${connection.escape(data.imgURL)} WHERE id = ${connection.escape(data.id)}`;

         connection.query(sql, (error) => {
            if (error) throw error
            callback({ message: "user edited successfully" });
         })
      }
   },

   deleteReceta : (data, callback) => {

      if (connection) {

         let sql = `DELETE FROM recetas WHERE id = ${connection.escape(data)}`;

         connection.query(sql, (error) => {

            if (error) throw error
            callback({ message: "receta deleted successfully" });

         })

      }

   }

};

module.exports = dataModel;
