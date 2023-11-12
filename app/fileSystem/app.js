const fs = require('fs');
// const {writeFile} = require('fs/promises')
const  termination = '.html'
let newName =  'cositas'+termination
let oldName = '';
let contenido = '';
console.log('Antes de iniciar el programa');
fs.readFile('cositas.html', 'ascii', (err, content)=> {
   try{
    console.log(content);
    contenido += content;
    // writeFile('importante.html', contenido);
    'Durante'

}catch(e){
    console.log(e);
    console.error(new Error(err));
   }
})
fs.rename('cositas.html', newName, (errr)=>{
    oldName = oldName
    if(errr){
        console.error(new Error(errr))
    }else{
        console.log('Nombre cambiado exitosamente');
    }
});
// Eliminar archivos 
fs.unlink('importante.html', (err)=>{
    if(err){
        console.error(new Error(err))
    };
    console.log('Archivo eliminado');
})