const automoveis = require("../models/automoveis.json");
const fs = require("fs");



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


const updateAutomoveis = (req, res) => {
    try {
        const automoveisId = req.params.id
        const automoveisToUpdate = req.body //Pego o corpo da requisição com as alterações 

        const automoveisFound = automoveis.find(automoveis => automoveis.id == automoveisId) // separo o automoveis que irei atualizar      
        const automoveisIndex = automoveis.indexOf(automoveisFound) // separo o indice do automoveis no array de automoveis

        if (automoveisIndex >= 0) { // verifico se o automoveis existe no array de automoveis
            automoveis.splice(automoveisIndex, 1, automoveisToUpdate) //busco no array o automoveis, excluo o registro antigo e substituo pelo novo 
        } else {
            res.status(404).send({ message: "Automoveis não encontrado para ser atualizado" })
        }

        fs.writeFile("./src/models/automoveis.json", JSON.stringify(automoveis), 'utf8', function (err) { // gravo meu json de automoveis atualizado
            if (err) {
                res.status(500).send({ message: err }) // caso dê erro retorno status 500
            } else {
                console.log("Arquivo de automoveis atualizado com sucesso!")
                const automoveisUpdated = automoveis.find(automoveis => automoveis.id == automoveisId) // separo o automoveis que modifiquei no array
                res.status(200).send(automoveisUpdated) // envio o automoveis modificado como resposta
            }
        })
    } catch (err) {
        res.status(500).send({ message: err }) // caso dê erro retorno status 500
    }
} 

module.exports = {
    updateAutomoveis,
    getAutomoveis,
    getAutomoveisNome,
    createAutomoveis,
    getAllAutomoveis,
}
