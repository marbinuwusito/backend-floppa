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
   }

};

module.exports = dataModel;
