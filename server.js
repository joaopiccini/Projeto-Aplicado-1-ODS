const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
});

app.get('/', (req, res)=> {
    console.log('Requisição recebida');
    return res.sendFile('./public/index.html');
});