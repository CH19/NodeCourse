// Cremos nuestra primeras api
const {createServer} = require('node:http');
let products = require('./acts/products.json');
const port = process.argv[2] ?? 8000;
// funcion para las opcciones en la creacion del servidor

const server = createServer((req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      res.setHeader("Content-Type", "text/html");
      switch (url) {
        case "/":
          return res.end(
            '<h1>Bienbenido a nuestra API</h1><a href="/products">Ver productos</a>'
          );
        case "/products":
          res.setHeader("Content-Type", "application/json")
          return res.end(JSON.stringify(products))
        default:
          res.end('<h1 style="color: crimson;">404 error en el servidor</h1>')
          break;
      }
      break;
      case "POST":
        switch(url) {
            case "/setproduct": {
                let body = '';
                res.on('data', (chunck) => {
                    body += chunck.toString();
                });
                // no funciono el metodo post 
                res.on('end', ()=> {
                    const data = JSON.parse(body)
                    res.writeHead(201, {'Content-Type': 'application/json'})
                    res.end(JSON.stringify(data))
                })
            break;
            }
        }     
      break;
    default:
      res.setHeader("Content-Type", "text-plane")
      res.end("This method dont exist")
      break;
  }
})
server.listen(port, () => {
  console.log(`server enabled in http://localhost:${port}`)
})
