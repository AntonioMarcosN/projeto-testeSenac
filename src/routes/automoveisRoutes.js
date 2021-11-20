const express = require('express');
const router = express.Router();
const controller = require('../controller/automoveisController')

router.get("/", controller.getall);
router.get("/automoveis", controller.getall);


module.exports = router;
