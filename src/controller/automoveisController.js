const automoveis = require("../models/automoveis.json");
const fs = require("fs");
const { RSA_NO_PADDING } = require("constants");

const getAllAutomoveis = (req, res) =>{
    console.log(req.url);
    res.status(200).send(automoveis)
}
const createAutomoveis = (req, res) => {
    const { id, carro, tipo, fabricante, cor, novo, motor } = req.body
    automoveis.push({ id, carro, tipo, fabricante, cor, novo, motor })
    fs.writeFile("./src/models/automoveis.json", JSON.stringify(automoveis), 'utf8', function (err) { // gravando novo filme no array de filmes
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const automoveisFound = automoveis.find(automoveis => automoveis.id == id) // recupero o filme que foi criei no array de filmes     
            res.status(200).send(automoveisFound)
        }
    })
}

    const getAutomoveis = (req, res) => {
    const automoveisId = req.params.id
    const automoveisFound = automoveis.find((automoveis) => automoveis.id == automoveisId)
    if (automoveisFound) {
        res.status(200).send(automoveisFound)
        } else {
        res.status(404).send({message: "automovel não encontrado"})
    }
}

    const getAutomoveisNome = (req, res) => {
    const automoveisCarro = req.params.carro
    const automoveisFound = automoveis.find((automoveis) => automoveis.carro == automoveisCarro)
    if (automoveisFound) {
        res.status(200).send(automoveisFound)
        } else {
        res.status(404).send({message: "automovel não encontrado"})
    }    

}

module.exports = {
    getAutomoveisNome,
    getAutomoveis,
    createAutomoveis,
    getAllAutomoveis,
}

