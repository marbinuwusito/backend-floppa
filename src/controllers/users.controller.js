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
         console.log(data)
         res.json(data);
      }
   });

}

function addOneUser (req, res) {
}

function editUser (req, res) {
}

function deleteUser (req, res) {
}

module.exports = {

   getUsers,
   getOneUser,
   addOneUser,
   editUser,
   deleteUser

}
