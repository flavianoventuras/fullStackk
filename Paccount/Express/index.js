//Express

const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
    req.authStatus = true;

    if(req.authStatus){
        console.log("Está logado")
        next(0);
    } else {
        console.log("Não está logado")
        next();
    }
}

app.use(checkAuth);

app.get('/', (req, res)=>{ //req = requisição, são os dados coletados  //res = a gente enviar
    // res.send('Ola mundo')
    res.sendFile(`${basePath}/index.html`)
});

app.listen(port, ()=>{
    console.log('App rodando na porta', port)
})