const fs = require('node:fs/promises');

// usando node js con promesas 
// const text = fs.readFile('./archivo.txt', 'utf-8', (err, text)=> {
//     console.log(text);
//     console.log('se leyo el archivo ');
// })

const texto = fs.readFile('./archivo.txt', 'utf-8').then(text => {
    console.log(text);
    console.log('se finalizo la lectura del text');
}).catch(err => {

    console.log(err);
    console.log('hay un error');
})