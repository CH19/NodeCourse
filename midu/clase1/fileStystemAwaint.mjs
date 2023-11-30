import {readFile} from 'node:fs/promises'

(
    async ()=> {
        console.log('Leyendo el primer archivo');
        const text = await readFile('./archivo.txt', 'utf-8');
        console.log('Primer text', text);
        console.log('Ahora vamos por otro');
        const text2 = await readFile('./archivo2.txt', 'utf-8');
        console.log('Archivo 2 leido', text2);
        console.log('Fin del programa');
    })()