// destructuramos el router de express y importamos dependencias 
const { Router } = require('express');
const dogsRouter = Router();
//  importamos las funciones handlers 
const { getDogsHandler, getDogsByIdHandler, getDogsByNameHandler } = require("../handlers/dogsHandler");
const { postDogsHandler } = require('../handlers/postDogsHandler');

const { getDogsByName } = require('../controller/getDogsByName');

// definimos los endpoint y los handler
dogsRouter.get("/dogs", getDogsHandler);
dogsRouter.get("/dogs/:idBreeds", getDogsByIdHandler);
dogsRouter.get("/dogs/search/name", getDogsByNameHandler);
dogsRouter.post('/dogs', postDogsHandler)

// exportamos   
module.exports = dogsRouter;