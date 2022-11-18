const { Router } = require('express')
const MedicoesController = require('../controllers/MedicoesController.js')

const router = Router()

router
    .post('/medicoes', MedicoesController.gravarMedicao)

module.exports = router