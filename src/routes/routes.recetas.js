const route = require('express').Router();
const cors = require('cors');
const upload = require('../helpers/imageUploads');

const {

   getRecetas,
   getOneReceta,
   editReceta,
   deleteReceta,
   addOneReceta

} = require('../controllers/recetas.controller');

route.route('/recetas').get(getRecetas);

route.route('/recetas/:id').get(cors(), getOneReceta);

route.route('/recetas').post(upload.single('imgURL'), addOneReceta);

route.route('/recetas/:id').put(upload.single('imgURL'), editReceta);

route.route('/recetas/:id').delete(deleteReceta);

module.exports = route;
