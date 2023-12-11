const http = require('node:http');

const url = process.argv[2] ?? '.'
function printGetData(){
    http.get(url, (res)=> {
        res.setEncoding('utf-8');
        res.on('data', console.log);
    })
}
printGetData();