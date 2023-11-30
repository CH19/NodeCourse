// Objeto process para saber los procesos actual de nuestra aplicacion 

// devuelve el directorio principal, el que esta cargando con node y todos los argumentos que agreguemos 
console.log(process.argv);

// nos permite escuchar eventos en el proceo, en este ejemplo estamos escuchando como la aplicacion sale del proceso 
process.on('exit', ()=> {
    console.log('saliste del proceso');
})



// nos permite ver el directorio en el que estamos trabajando 
console.log(process.cwd());
// permite codificar salir del proceso 
process.exit()