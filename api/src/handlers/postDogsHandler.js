const { createDog } = require('../controller/createDog')

async function postDogsHandler(req, res) {

    try {
        const { image, name, weight, height, life_span, temperaments } = req.body;
        console.log(name);
        if (name === " " && height === " " && weight === " " && life_span === " " && temperaments === " ") {
            return res.status(401).send("faltan datos")
        }

        const newDog = await createDog(
            image,
            name,
            weight,
            height,
            life_span,
            temperaments
        );
        return res.status(201).json(newDog);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { postDogsHandler };