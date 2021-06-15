const dataModel = require('../models/inner.model');

console.log("owosito");

function getUserReceta(req, res) {

   dataModel.getUserReceta((data, error) => {

      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }

   });

}

function getRecetaUser(req, res) {

   dataModel.getRecetaUser ((data, error) => {
      if (error) {
         console.log(error);
      } else {
         res.json(data);
      }
   })
}

module.exports = {
   getUserReceta,
   getRecetaUser
}
