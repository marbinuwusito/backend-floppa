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

   const {nombre, pais, biografia} = req.body;
   const { filename } = req.file;
   const imgURL = `http://localhost:3050/public/${filename}`;

   dataModel.addUser({ nombre, pais, biografia, imgURL}, (data, error) => {

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
      biografia
   } = req.body;

   const { filename } = req.file;
   const imgURL = `http://localhost:3050/public/${filename}`;

   dataModel.editUser({id, nombre, pais, biografia, imgURL}, (data, error) => {
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
