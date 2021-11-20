const automoveis = require("..model/automoveis.json");

const getall = (req, res) => {
    console.log(req.url);

    res.send(automoveis);
};

module.exports = {getall};

