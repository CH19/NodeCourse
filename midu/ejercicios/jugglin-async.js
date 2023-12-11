const {get} = require('node:http');

const url = process.argv.slice(2);

function getData(ur){
    return new Promise((resolve, rejects)=> {
        let total = '';
        get(ur, (res)=> {
            res.setEncoding('utf-8');
            res.on('data', (data) => total += data);
            res.on('end', ()=> resolve(total));
            res.on('error', rejects);
        }).on('error', rejects);
    })
}
Promise.allSettled(url.map(e => getData(e))).then(res => res.forEach(data => console.log(data.value)));