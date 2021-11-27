const express = require('express');
const router = express.Router();
const controller = require('../controller/automoveisController')

router.get("/", controller.getAllAutomoveis);
router.post("/", controller.createAutomoveis);
router.get("/:id", controller.getAutomoveis);
router.get("/:carro", controller.getAutomoveisNome);
router.put("/:id", controller.updateAutomoveis);
router.patch("/:id/novo", controller.updatenovoStatus);
router.delete("/:id", controller.deleteAutomoveis)


module.exports = router;
