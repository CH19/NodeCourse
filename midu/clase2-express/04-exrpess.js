// usando express para correr un comadno 
// importamos el framework de express 
const express = require('express');
const parseRoute = (route) => `/${route}`
// creamos la app de express con esta function, podemos agregar opcciones adicionales 
const app = express();
// creamos el puerto 
const port = process.env.PORT ?? 7000;
const routes = ['nosotros', 'registro','products'];
// instanciando productos para la api 
const products = require('./acts/products.json');

// usando un midlwere 
app.use((req, res, next) => {
    if(req.method == 'GET'){
        // res._final(console.log('hola'))
        next()
    }
    next()
});
// usando otro miudlwere para peticiones post 
app.use((req, res, next) => {
    if(req.method != 'POST') return next();
    if(req.headers['content-type'] != 'application/json') return next();

    let bodyThing = '';
    req.on('data', (chunk) => {
        bodyThing += chunk.toString();
    })
    req.on('end', () => {
        const data = JSON.parse(bodyThing);
        req.body = data;
        next();
    })

})

// para crear una ruta es diferente a nodejs ya que simplemente colocamos el metodo con el metodo http que queremos usar 
// e instanciamos la ruta + una funcion anonima con la informacion 
app.get('/', (req, res) => {
    res.end(`<h1> estamos haciendo una pagina en express </h1><a href="${parseRoute(routes[0])}">${routes[0]}</a><a href="${parseRoute(routes[1])}">${routes[1]}</a>"`);
});
app.get(parseRoute(routes[0]), (req, res)=> {
    res.end('<h1> Somos una empresa familiar </h1>');
});
app.get(parseRoute(routes[1]), (req, res)=> {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Escribe tus datos</h1>
        <form action="/setproduct">
            <label for="name">Name</label>
            <input type="text" id="name">
            <label for="password">Password</label>
            <input type="text" id="password">
            <input type="submit" value="send">
        </form>
        <script>
            const form = document.querySelector('form');
    </script>
    </body>
    </html>`)
});
app.get(parseRoute(routes[2]), (req, res)=> {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(products));
})
app.post('/setproduct', (req, res)=> {
    res.json(req.body);
});

// usando app use para deducir cual ruta 404 y asingarle un error 
app.use((req, res)=>{
    res.status(404).send(`Error ${res.statusCode} reintente nuevamente`);
})
app.listen(port, ()=> {
    console.log(`Escuchando el servidor en http://localhost:${port}`);
    console.log(parseRoute(routes[2]));
});

