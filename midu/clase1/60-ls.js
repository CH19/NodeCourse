// Primera aplicacion con node 
const fs = require('node:fs');

// programa para leer todos los archivos en un directorio 
fs.readdir('.', (err, files) => {
    if(err){
        console.error(err);
        return
    }
    files.forEach(file => console.log(file));
})