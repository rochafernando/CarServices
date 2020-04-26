const express = require('express');

const ManufactureController = require('./controllers/ManufacturerController');

const routes = express.Router();


routes.get('/manufacturer', ManufactureController.index);

module.exports = routes;
