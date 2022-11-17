const express = require('express')
const routes = require('./src/routes')


const app = express()
const port = process.env.PORT || 3000

routes(app)

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})