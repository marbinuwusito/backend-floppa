const route = require('express').Router();
const { getUserReceta, getRecetaUser } = require('../controllers/inner.controller');

route.route('/recetaUser').get(getUserReceta);
route.route('/userReceta').get(getRecetaUser);

module.exports = route;
