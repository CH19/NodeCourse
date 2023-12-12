// crearemos un pequeño servidor para pracitca un login con middleweres en express
const expres = require("express");
const morgan = require('morgan');
const app = expres();
const port = process.argv[2] ?? 8002;

app.use((req, res, next) => {
    const {user, password} = req.query;
    if(user.toLowerCase() === 'ch19' && password === '1234'){
        return  next();
    };
    res.end('<h1 style="color: crimson;">Error usuario incorrecto</h1>')
});
app.use(morgan())
// app.use((req, res, next) => {
//     const {option} = req.query
//     res.end('<h1>elige la opccion de la siguiente pagina</h1>');
//     if(option != null || option != undefined){
//         next()
//         return req.url = '/';
//     }
// })
app.all("/", (req, res) => {
  res.end("<h1>Bienvenido a la pagina <h1>");
});

app.listen(port, () => {
  console.log(`server in http://localhost:${port}`);
});
