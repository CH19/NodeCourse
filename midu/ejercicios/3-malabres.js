// imprimir el contenido de 3 url con response 
const http = require('https');
const urls = process.argv.slice(2) ?? 'https://www.google.com/';


const fetchPromise = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res)=>{
            let chunk = '';
            res.setEncoding('utf-8');
            res.on('data', data => {
                chunk += data
            });
            res.on('end', ()=> resolve(chunk));
            res.on('error', (e) => reject('hubo un error en la carga', e));
        }).on('error', console.error('error en la carga de datos'));
    })
}

Promise.allSettled(urls.map(url => fetchPromise(url)))
.then(res => res.forEach(r => console.log(r)));
