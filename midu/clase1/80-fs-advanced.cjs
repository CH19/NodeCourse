const fs = require('node:fs');
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
const folder = process.argv[2] ?? '.';
const archivoBuscado = process.argv[3] ?? null;

fs.readdir(folder, (err, files)=> {
    if(err){
        console.error(err)
        return
    }
    console.log('indica el archivo que estas buscando');
    // readline.question('Indica el archivo que estas buscando', archivo => {
    //     const busqueda = files.find(file => file == archivo)
    //     if(busqueda) console.log('archivo', busqueda, 'encontrado');
    //     else console.log('no encontrado');
    //     readline.close();
    // })
    if(archivoBuscado != null){
        const encontrado = files.find(file => file == archivoBuscado);
        if(encontrado) console.log('Si existe el archivo', encontrado);
        else console.warn('no existe el archvio')
    }
    files.forEach(file => {
        fs.stat(file, (err, stats) => {
            if(err){
                console.error('error aqui ',err);
                process.exit(1);
            }
            console.log(file ,stats.isFile());
            console.log(file, 'pesa unos', stats.size);
            if(stats.isDirectory()){
                console.warn('***tenemos un directorio***');
            }
        })
    })
})