const { MedicoesServices } = require('../services')
const medicoesServices = new MedicoesServices()

class MedicoesController {

    static async gravarMedicao(dadosColetados){
        try{
            await medicoesServices.criarRegistro(dadosColetados)
        } catch(err){
            console.error(err)
        }
    }

}

module.exports = MedicoesController