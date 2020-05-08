const express = require('express');
const UserController = require ('./controllers/UserController');
const AddressController = require ('./controllers/AddressController');
const TechControllers = require('./controllers/TechController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index );
routes.post('/users/:user_id/addresses', AddressController.store );

routes.get('/users/:user_id/techs', TechControllers.index );
routes.post('/users/:user_id/techs', TechControllers.store );

module.exports = routes;