const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: 'Veiculos novos e seminovos',
        date: "19/11/2021"
    })
})

module.exports = router;
