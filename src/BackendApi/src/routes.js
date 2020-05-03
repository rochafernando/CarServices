const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const ManufactureController = require('./controllers/ManufacturerController');
const namedValid = require('./Validations/ManufactureValidation');

const routes = express.Router();


routes.get('/manufacturer', ManufactureController.index);
routes.post('/manufacturer', celebrate({
    [Segments.BODY] : namedValid 
   
}) , ManufactureController.create);

module.exports = routes;
