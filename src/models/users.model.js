const connection = require('../database/connection');

let dataModel = {

   getUsers : (callback) => {

      if (connection) {
         let sql = 'SELECT * FROM usuarios';
         connection.query(sql, (error, rows) => {
            if (error) throw error
            callback(rows);
         });
      }

   },

   getOneUser: (data, callback) => {

      if (connection) {
         let sql = `SELECT * FROM usuarios WHERE id = ${connection.escape(data)}`
         connection.query(sql, (error, rows) => {
            if (error) throw error
            callback(rows);
         });
      }
   },

   addUser : (data, callback) => {

      if (connection) {

         let sql = `INSERT INTO usuarios (nombre, pais, biografia, imgURL) VALUES(${connection.escape(data.nombre)}, ${connection.escape(data.pais)}, ${connection.escape(data.biografia)}, ${connection.escape(data.imgURL)})`;

         connection.query(sql, (error) => {

            if (error) throw error
            callback({ message: "user added" });

         })
      }

   },

   editUser : (data, callback) => {

      if (connection) {

         let sql = `UPDATE usuarios SET nombre = ${connection.escape(data.nombre)}, pais = ${connection.escape(data.pais)}, biografia = ${connection.escape(data.biografia)} WHERE id = ${connection.escape(data.id)}`;

         connection.query(sql, (error) => {
            if (error) throw error
            callback({ message: "user edited successfully" });
         })
      }
   },

   deleteUser : (data, callback) => {

      if (connection) {

         let sql = `DELETE FROM usuarios WHERE id = ${connection.escape(data)}`;

         connection.query(sql, (error) => {

            if (error) throw error
            callback({ message: "user deleted successfully" });

         })

      }

   }

};

module.exports = dataModel;
