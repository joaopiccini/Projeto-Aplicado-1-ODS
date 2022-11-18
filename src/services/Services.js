const database = require('../models')

class Services {

    constructor(model){
        this.model = model
    }

    async buscarTodosOsRegistros(){
        return await database[this.model].findAll()
    }

    async buscarRegistroPorId(id){
        return await database[this.model].findOne({where: {id: id}})
    }

    async criarRegistro(dados, t = {}){
        console.log(dados)
        return await database[this.model].create(dados, t)
    }

    async atualizarRegistro(dadosAtualizados, id, t = {}){
        return await database[this.model].update(dadosAtualizados, {where: {id: id}}, t)
    }

    async deletarRegistro(id, t = {}){
        return await database[this.model].destroy({where: {id: id}}, t)
    }

    async restaurarRegistro(id, t = {}){
        return await database[this.model].restore({where: {id: id}}, t)
    }

}

module.exports = Services