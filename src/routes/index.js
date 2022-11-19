const bodyParser = require('body-parser')
const path = require('path')
const medicoes = require('./medicoesRoute.js')

module.exports = app => {
    
    app.use(
        bodyParser.json(),
        medicoes
        );

}