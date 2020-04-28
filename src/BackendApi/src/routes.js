const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const ManufactureController = require('./controllers/ManufacturerController');

const routes = express.Router();


routes.get('/manufacturer', ManufactureController.index);
routes.post('/manufacturer',celebrate({
    [Segments.BODY] : Joi.object().keys({
        name : Joi.string().trim().required().min(3).max(50)
    })

}) ,ManufactureController.create);

module.exports = routes;
