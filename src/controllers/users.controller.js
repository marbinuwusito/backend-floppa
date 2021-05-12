const dataModel = require('../models/users.model');

function getUsers (req, res) {

   dataModel.getUsers((data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function getOneUser (req, res) {

   const { id } = req.params;

   dataModel.getOneUser(id, (data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function addOneUser (req, res) {

   const {nombre, pais, biografia, codigoReceta} = req.body;

   dataModel.addUser({ nombre, pais, biografia, codigoReceta }, (data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function editUser (req, res) {

   const { id } = req.params;

   const {
      nombre,
      pais,
      biografia,
      codigoReceta
   } = req.body;

   dataModel.editUser({id, nombre, pais, biografia, codigoReceta }, (data, error) => {
      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }
   });

}

function deleteUser (req, res) {

   const { id } = req.params;

   dataModel.deleteUser(id, (data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   })

}

module.exports = {

   getUsers,
   getOneUser,
   addOneUser,
   editUser,
   deleteUser

}
