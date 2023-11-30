// nuestro primer servidor 
const http = require('node:http');

const server = http.createServer((req, res)=> {
    console.log('request recived');
    res.end('como estas');
})

server.listen(0, ()=> {
    console.log(`server listening on port ${server.address().port} `);

})