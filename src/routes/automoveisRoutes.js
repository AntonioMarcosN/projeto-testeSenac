const express = require('express');
const router = express.Router();
const controller = require('../controller/automoveisController')

router.get("/", controller.getAllAutomoveis);
router.post("/", controller.createAutomoveis);
//router.get("/:id", controller.getAutomoveis);

module.exports = router;
