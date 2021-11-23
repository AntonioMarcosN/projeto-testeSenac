const automoveis = require("../models/automoveis.json");

const getAllAutomoveis = (req, res) =>{
    console.log(req.url);
    res.status(200).send(automoveis)
}

module.exports = {
    getAllAutomoveis,
}

