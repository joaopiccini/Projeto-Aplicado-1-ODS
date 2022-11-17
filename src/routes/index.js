const bodyParser = require('body-parser')
const path = require('path')
const medicoes = require('./medicoesRoute.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        medicoes
        );

/*    app.get('/', (req, res, next) => {
        const options = {
            root: path.join('../public/index.html')
        };
        const file = 'index.html'
        res.status(200).sendFile('file', options, (err) => {
            if(err){
                next(err)
            } else {
                console.log('Sent:', file)
            }
        })
    }) */
}