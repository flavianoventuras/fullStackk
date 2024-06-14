const fs = require('fs');

fs.unlink("arquivo.txt", (err) =>{
    console.log(err);
})