// vamos a crear nuestra primera api
const express = require("express");
// usamos la biblioteca crypto para crear id unicos
const { randomUUID } = require("node:crypto");
const movies = require("./movies.json");
// anadimos morgan en el proyecto para ver la informacion de las solicitudes http que hacemos 
const morgan = require('morgan');
// anadimos zod en el proyecto para validar el tipo de objeto que envia un usuario 
const z = require('zod');
const app = express();
const port = process.argv[2] ?? 7000;
let genreRoute = [];
// desabilitdamos x-powered-by para mayor seguridad en nuestra api
app.disable("x-powered-by");
// middlewere utilizado para convertir las solicitudes post del body a formato json y asi confirmar la seguridad 
app.use(express.json());
// se usa morgan para obtener informacion de las solicitudes http 
app.use(morgan('dev'));

// creamos un middluwere para que si entran datos json se formateen con un metodo que viene en express

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}\\movies.html`);
});
// obtener toda la data de las movies
app.get("/movies", (req, res) => {
  const { genre, c } = req.query;

  // Generando nuestro primer endopint
  if (genre != undefined) {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.genre.some(
          (genero) => genero.toLowerCase() == genre.toLowerCase()
        ) == true
    );
    // filtrando la cantidad de peliculas que se quieren mostrar
    if (c) return res.json(filteredMovies.slice(0, c));
    return res.json(filteredMovies);
  }
  if (c) return res.json(movies.slice(0, c));
  res.json(movies);
});
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  // console.log(movies)
  const movie = movies.find((movie) => movie.id == id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "404 hay un error" });
});
// creando nuestro primer metodo post

app.post("/movies", (req, res) => {

  const datanewMovie = req.body; 
  if(datanewMovie == undefined || datanewMovie == false) return res.status(404).json({'message': 'Failed data dont exist'});
  const newMovie = {
    id: randomUUID(),
    ...datanewMovie
  }
  movies.push(newMovie);
  return res.status(201).json(movies)
});
app.post("/name", function (req, res) {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    const finalData = JSON.parse(data);
    res.setHeader("Content-Type", "application/json");
    res.status(201);
    res.json({
      message: "Final data",
      finalData: finalData,
    });
  });
});
app.use((req, res, next) => {
  res.status(404).json({ message: "404 not fund" });
  next();
});
app.listen(port, () => {
  console.log(`this server its here http://localhost:${port}`);
});
