const { Router } = require('express')
const MedicoesController = require('../controllers/MedicoesController.js')

const router = Router()

router
    .get('/medicoes', MedicoesController.gravarMedicao)

module.exports = router