const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const StateController = require('./controllers/StateController');
const AddressController = require('./controllers/AddressController');
const CityController = require('./controllers/CityController');
const ManufactureController = require('./controllers/ManufacturerController');
const namedValid = require('./Validations/ManufactureValidation');

const routes = express.Router();


routes.get('/manufacturer', ManufactureController.index);
routes.post('/manufacturer', celebrate({
    [Segments.BODY] : namedValid 
   
}) , ManufactureController.create);

//States
routes.get('/states', StateController.index);

//Cities
routes.get('/cities', CityController.index);
routes.post('/cities',CityController.create);
routes.put('/cities/:id',CityController.update);
routes.delete('/cities/:id',CityController.delete);

//Address
routes.get('/address',AddressController.index);
routes.post('/address',AddressController.create);
routes.put('/address/:id',AddressController.update);
routes.delete('/address/:id',AddressController.delete);



module.exports = routes;
