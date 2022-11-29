const express = require('express')
const routes = require('./src/routes')
var sphp = require('sphp')

const app = express()
const port = process.env.PORT || 3000

routes(app)

app.use(express.static('public'))
app.use(sphp.express('public'))

app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})