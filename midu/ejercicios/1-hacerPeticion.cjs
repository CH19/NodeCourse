const http = require('https');


const url = process.argv[2] ?? 'https://api.escuelajs.co/api/v1/products';

function getPeticion(){
    http.get(url, (res)=> {
        res.setEncoding('utf-8');
        res.on('data', console.log);
        res.on('error', console.error);
    })
}
getPeticion();

