const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo: "Veiculos novos e seminovos",
        date: "19/11/2021"
    })
})

module.exports = router;
