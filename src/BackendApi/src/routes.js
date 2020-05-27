const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const ManufactureController = require('./controllers/ManufacturerController');
const ManufactureValidation  = require('./Validations/ManufactureValidation');

const routes = express.Router();


routes.get('/manufacturer', ManufactureController.getAll);
routes.post('/manufacturer', celebrate({
    [Segments.BODY] : ManufactureValidation.nameValid()
   
}) , ManufactureController.create);


routes.put('/manufacturer/:id', celebrate({
    [Segments.PARAMS]: ManufactureValidation.identification(),
    [Segments.BODY]: ManufactureValidation.nameValid()
   
}) , ManufactureController.update);

routes.delete('/manufacturer/:id', celebrate({
    [Segments.PARAMS]: ManufactureValidation.identification(),       
}) , ManufactureController.delete);


module.exports = routes;
