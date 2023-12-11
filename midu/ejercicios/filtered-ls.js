const fs = require('node:fs');
const {extname} = require('node:path');

const directory = process.argv[2] ?? '.';
const extensionFinal = process.argv[3];

function getFiles(directorio, extension){
    fs.readdir(directorio, (err, files)=> {
        if(err){
            console.error(err);
            process.exit(1);
        }
        // files.forEach(file => file.split('.')[1] === extension ? console.log(file) : null)
        files.filter(file => extname(file) == `.${extension}`).forEach(file => console.log(file));
    })
}
getFiles(directory, extensionFinal);