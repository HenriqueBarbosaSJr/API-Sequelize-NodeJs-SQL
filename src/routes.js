const express = require('express');
const UserController = require ('./controllers/UserController');
const AddressController = require ('./controllers/AddressController');
const TechControllers = require('./controllers/TechController');
const ReportController = require('./controllers/ReportCotroller');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index );
routes.post('/users/:user_id/addresses', AddressController.store );

routes.get('/users/:user_id/techs', TechControllers.index );
routes.post('/users/:user_id/techs', TechControllers.store );
routes.delete('/users/:user_id/techs', TechControllers.delete );

routes.get('/report', ReportController.show );

module.exports = routes;