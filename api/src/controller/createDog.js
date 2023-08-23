const { dog, temperaments } = require('../db');

async function createDog(image, name, weight, height, life_span, temperaments) {

    await dog.create({ image, name, weight, height, life_span })

    // await newDog.addTemperaments(temperamento)
}

module.exports = { createDog };