const { MedicoesServices } = require('../services')
const medicoesServices = new MedicoesServices()

class MedicoesController {

    static async gravarMedicao(req, res){
        const dadosColetados = req.body;
        try{
            await medicoesServices.criarRegistro(dadosColetados)
            return res.status(200).json(dadosColetados)
        } catch(err){
            console.error(err)
            return res.status(500).json(err.message)
        }
    }

    static async atualizarMedicao(req, res){
        const dadosColetados = req.body;
        const id = req.params.id;
        try{
            await medicoesServices.atualizarRegistro(dadosColetados, id)
            return res.status(200).json(dadosColetados)
        } catch(err){
            console.error(err)
            return res.status(500).json(err.message)
        }
    }

}

module.exports = MedicoesController