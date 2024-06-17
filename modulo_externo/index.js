const fs = require('fs');

if(fs.existsSync('./minhaPasta')){
    console.log('Este diretório já existe')
} else {
    console.log("Criando diretório...")
    fs.mkdir('minhaPasta', (err)=>{
        console.log(err);
    });
}