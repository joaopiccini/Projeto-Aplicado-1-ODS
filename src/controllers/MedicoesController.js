const { MedicoesServices } = require('../services')
const medicoesServices = new MedicoesServices()

class MedicoesController {

    static async gravarMedicao(req, res){
        const dadosColetados = req.body;
        console.log(dadosColetados)
        try{
            await medicoesServices.criarRegistro(dadosColetados)
        } catch(err){
            console.error(err)
        }
    }

}

module.exports = MedicoesController