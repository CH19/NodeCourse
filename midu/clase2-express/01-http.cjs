// repasando http
const http = require("node:http");
const port = process.argv[2] ?? 8000;
const products = require('./acts/products.json');
// creamos el servidor
const server = http.createServer((request, response) => {
  console.log("hola mundo como estas", request.url);
  const image = "https://es.wikipedia.org/wiki/Archivo:PNG_transparency_demonstration_1.png";
  // finalizamos la responses
  // creando rutas
  response.setHeader("Content-Type", "text/html", "utf-8");
  switch (request.url) {
    case "/":
      response.end(
        '<h1 id="title" style="background-color:red;">Hola estamos usando nodemon en el proyecto</h1><button>Click here aqui</button> <a href="/contacto">Ir a contactos</a><br><a href="/cositas">ir a cositas</a>'
      );
      break;
    case "/contacto":
      response.end(
        '<h1 style="color: blue;">Bienvenido a nuesto sitio de contacto</h1> <a href="/">Ir a inicio</a>'
      );
      break;
      case '/products': 
        response.setHeader('Conten-Type', 'application/json');
        response.end(JSON.stringify(products));
      break;
    case "/cositas":
      response.end(`
        <!DOCTYPE html>
<html>
<head>
    <title>Tabla de equipos de fútbol</title>
</head>
<body>
<h1 style="color: skyblue;">Equipos de futbol </h1>
    <table>
        <thead>
            <tr>
                <th>Equipo</th>
                <th>País</th>
                <th>Liga</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Real Madrid</td>
                <td>España</td>
                <td>La Liga</td>
            </tr>
            <tr>
                <td>Barcelona</td>
                <td>España</td>
                <td>La Liga</td>
            </tr>
            <tr>
                <td>Manchester United</td>
                <td>Inglaterra</td>
                <td>Premier League</td>
            </tr>
            <tr>
                <td>Bayern Munich</td>
                <td>Alemania</td>
                <td>Bundesliga</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
        
        `);
      break;
    case "/imagen":
      response.setHeader("Content-Type", "image/png");
      response.end(image);
      break;
    default:
      response.end(
        '<h1 style="color: crimson;">Error 404 page no ecnontrada</h1>'
      );
      break;
  }
});

server.listen(port, () => {
  console.log(`Server aviabe in http://localhost:${port}`);
});
