const { getDogs } = require("./getDogs");
require('dotenv').config();


async function getDogsByName(name) {

    const dogs = await getDogs();

    return dogs.name.toLowerCase().includes(name.toLowerCase());

    return dogName

}

module.exports = { getDogsByName };