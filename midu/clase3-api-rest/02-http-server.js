console.clear();
const {createServer} = require('node:http');

const port = process.argv[2] ?? 8000;
const server = createServer((req, res) => {
    console.log('peticion recibida');
    console.log(req.method);
    console.log(req.headers);
    if(req.url == '/holi'){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hola Mundo</h1>');
    }
    console.log(req.url);
    res.end('Entendiendo http');
})

server.listen(port, ()=> {
    console.log(`The server is in http://localhost:${port}`);
})