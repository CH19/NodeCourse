const http = require('node:http');
const fs  = require('node:fs');

const [a,b, port, fileName] = process.argv;
const server = http.createServer((req, res)=> {
    fs.createReadStream(fileName).pipe(res)
})

server.listen(port, ()=> console.log('listening port'));