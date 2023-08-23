const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds/";
require('dotenv').config();
const { API_KEY } = process.env; // destructuring assignment
const { Dog, Temperament } = require('../db')
    // creamos  funcion controladora que nos pide la informacion de los perros a la api
async function getDogs() {

    const resp = await axios(`${URL}?api_key=${API_KEY}`); // template literal
    const { data } = resp;

    const dogsApi = data.map((dog) => {
        return {
            ...dog, // spread operator
            image: dog.image.url,
            weight: dog.weight.metric,
            height: dog.height.metric,
        };
    })

    return dogsApi
}

module.exports = {
    getDogs,
}