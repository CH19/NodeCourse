// aplicacion para saber un puerto disponible 
// usando net 
const net = require('node:net');
const { resolve } = require('node:path');

function findAviablePort(){
    const desredPort = process.env.PORT ?? 3000
    return new Promise((resolve, reject)=> {
        let server = net.createServer();
        server.listen(desredPort, ()=> {
            const {port} = server.address();
            server.close(()=>{
                resolve(port);
            })
        })
    })
}
findAviablePort().then(port => {
    const server = net.createServer();
    server.listen(port, ()=> {
        console.log(`server listening on port http://localhost:${port}`);
    })
})