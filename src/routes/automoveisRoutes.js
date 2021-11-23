const express = require('express');
const router = express.Router();
const controller = require('../controller/automoveisController')

router.get("/", controller.getAllAutomoveis);


module.exports = router;
