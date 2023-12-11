const http = require('node:https');
const { writeFileSync} = require('node:fs');
const { error } = require('node:console');

const url = process.argv[2] ?? 'https://api.escuelajs.co/api/v1/products';
const datos = []
let texto = '';
function serCreate(){
    let total = 0;
    let counter = 0
    http.get(url, (res)=>{
        res.setEncoding('utf-8');
        res.on('data', (data)=>{
        writeFileSync('google.html', data);
        console.log((total += String(data).length), (counter += 1));
    })
    res.on('end', ()=>{
        process.exit(0);
    }).on('error', console.error);
    }).on('error', console.error)
    return total
 }
 console.log('el total de caracteres es ', serCreate());
setTimeout(()=> console.log(datos), 1000)