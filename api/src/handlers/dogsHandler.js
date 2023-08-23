const { getDogs } = require('../controller/getDogs');
const { getDogsById } = require('../controller/getDogsById');
const { getDogsByName } = require('../controller/getDogsByName')


// creamos  funcion que nos pide la informacion de los perros a la api y la BD
async function getDogsHandler(req, res) {

    try {
        const resp = await getDogs();

        if (resp.error) {
            return res.status(404).send(resp.error);
        }
        return res.status(200).json(resp);

    } catch (error) {
        return res.status(500).send(error.message);
    }

}

// creamos la funcion de nos devuelve la raza de un perro por id 
async function getDogsByIdHandler(req, res) {
    const { idRaza } = req.params;
    console.log(idRaza)
    try {
        const resp = await getDogsById(idRaza);

        if (resp.error) {
            return res.status(404).send(resp.error);
        }
        return res.status(200).json(resp);


    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// funcion handler para buscar raza de perro por nombre
async function getDogsByNameHandler(req, res) {

    const { name } = req.query
    console.log(name)
    try {

        const resp = await getDogsByName(name);

        if (resp.error) {
            return res.status(404).send(resp.error);
        }
        return res.status(200).json(resp);


    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getDogsHandler,
    getDogsByIdHandler,
    getDogsByNameHandler
};