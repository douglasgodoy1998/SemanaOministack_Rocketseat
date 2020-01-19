const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;
        const techsArray = parseStringAsArray(techs);
        //Buscar todos devs num raio de 10km
        //Filtro por tecnologia

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            }
        })
        console.log(techsArray);
        return res.json({ devs });
    }
}
