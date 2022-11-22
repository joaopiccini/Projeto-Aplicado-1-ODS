const { Router } = require('express')
const MedicoesController = require('../controllers/MedicoesController.js')

const router = Router()

router
    .post('/medicoes', MedicoesController.gravarMedicao)
    .put('/medicoes/:id', MedicoesController.atualizarMedicao)

module.exports = router