const {get} = require('node:http');

// esto debe ser un string con una url 
const url = process.argv[2] ?? '.'
const getCollect = () => {
    let total = ''
    get(url, (res)=>{
        res.setEncoding('utf-8');
        res.on('data', (data)=> total += data);
        res.on('end', ()=> {
            console.log(total.length);
            console.log(total);
        })
    })
}
getCollect();