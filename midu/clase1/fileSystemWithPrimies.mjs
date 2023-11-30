import { rejects } from 'node:assert';
import {readFile} from 'node:fs/promises';
import { resolve } from 'node:path';

// usando promise all para hacer un trabajo de lectura de las ods versiones 
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8'),
    new Promise((resolve, rejects) => {
        try{
            let num = 0;
            for (let index = 0; index < 10; index++) {
                num+= index
            }
            resolve(num)    
        }catch(e){
            rejects(e)
        }
    })
]).then(([text1, text2, nums]) => {
    console.log('leido el primer archivo');
    console.log(text1);
    console.log('leido el segundo archivo');
    console.log(text2);
    console.log('la acumulacion es de ', nums);
})
