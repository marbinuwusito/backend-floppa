const dataModel = require('../models/recetas.model');

function getRecetas (req, res) {

   dataModel.getRecetas((data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function getOneReceta (req, res) {

   const { id } = req.params;

   dataModel.getOneReceta(id, (data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function addOneReceta (req, res) {

   const {nombre, pasos, ingredientes, description, codigoUsuario} = req.body;
   const { filename } = req.file;
   const imgURL = `http://localhost:3050/public/${filename}`;

   dataModel.addReceta({ nombre, pasos, ingredientes, description, imgURL, codigoUsuario}, (data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function editReceta (req, res) {

   const {
      nombre,
      pasos,
      ingredientes,
      description,
      codigoUsuario
   } = req.body;

   const { filename } = req.file;
   const imgURL = `http://localhost:3050/public/${filename}`;
   const { id } = req.params;

   dataModel.editReceta({id, nombre, pasos, ingredientes, description, imgURL, codigoUsuario}, (data, error) => {
      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }
   });

}

function deleteReceta (req, res) {

   const { id } = req.params;

   dataModel.deleteReceta (id, (data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   })

}

module.exports = {

   getRecetas,
   getOneReceta,
   addOneReceta,
   editReceta,
   deleteReceta

}
