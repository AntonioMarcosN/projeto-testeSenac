const express = require('express');
const router = express.Router();
const controller = require('../controller/automoveisController')

router.get("/", controller.getAllAutomoveis);
router.post("/", controller.createAutomoveis);
router.get("/:id", controller.getAutomoveis);
router.get("/:carro", controller.getAutomoveisNome);
router.put("/:id", controller.updateAutomoveis)


module.exports = router;
