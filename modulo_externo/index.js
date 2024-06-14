const fs = require('fs');

fs.rename("arquivo2.txt", "novoArquivo.txt", (err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log("Arquivo renomeado")

})