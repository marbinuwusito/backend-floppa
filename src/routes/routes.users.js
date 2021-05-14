const route = require('express').Router();
const upload = require('../helpers/imageUploads');

const {

   getUsers,
   getOneUser,
   addOneUser,
   editUser,
   deleteUser

} = require('../controllers/users.controller');

route.route('/users').get(getUsers);

route.route('/users/:id').get(getOneUser);

route.route('/users').post(upload.single('imgURL'), addOneUser);

route.route('/users/:id').put(editUser);

route.route('/users/:id').delete(deleteUser);

module.exports = route;
