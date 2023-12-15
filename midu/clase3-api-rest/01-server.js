// vamos a crear nuestra primera api
const express = require("express");
// usamos la biblioteca crypto para crear id unicos
const { randomUUID } = require("node:crypto");
const movies = require("./movies.json");
// anadimos morgan en el proyecto para ver la informacion de las solicitudes http que hacemos 
const morgan = require('morgan');
// importamos el esquema que tendran las peticiones post con las peliculas
const {validateMovie, validateProperity} = require('./moviesData');
const { error } = require("node:console");
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
  // colocando el header para que nuestra api pueda ser compartida 
  const { genre, c, key } = req.query;
  if(key == '1234'){
    res.header('Access-Control-Allow-Origin', '*')
  }

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
// crear nuestra primer pelicula 
app.post("/movies", (req, res) => {
  // validar el tipo del json enviado a nuestra pelicula 
  const datanewMovie = validateMovie(req.body); 

  if(datanewMovie.error || !datanewMovie) return res.status(404).json({'message': datanewMovie.error});
  const newMovie = {
    id: randomUUID(),
    ...datanewMovie.data,
  }
  movies.push(newMovie);
  return res.status(201).json(movies)
});
app.put('/movies/:id', (req, res) => {
  const {id} = req.params;
  const indexMovie = movies.findIndex(movie => movie.id == id);
  const changeMovie = validateMovie(req.body);
  const changeMovieProps = validateProperity(req.body);
  if(changeMovieProps.error) return res.status(404).json({'message': changeMovie.error.message});
  if(indexMovie == -1){
    if(changeMovie.error) return res.status(404).json({error: changeMovie.error})
    const newMovie = {
      id: randomUUID(),
      ...changeMovie.data
    };
    movies.push(newMovie);
    return res.status(201).json(movies);
  }
  const movieChanges = {
    ...movies[indexMovie],
    ...changeMovieProps.data
  }
  movies[indexMovie] = movieChanges;
  return res.status(201).json(movies[indexMovie]);
})
// creamos un metodo para actualizar nuestras peliculas 
app.patch('/movies/:id', (req, res) => {
  const {id} = req.params 
  const changeMovie = validateProperity(req.body);
  const movieIndex = movies.findIndex(movie => movie.id == id);
  if(movieIndex == -1) return res.status(404).json({'message': 'movie dont exist'});
  if(changeMovie.error) return res.status(404).json({error: changeMovie.error} )
  const updateMovie = {
    ...movies[movieIndex],
    ...changeMovie.data
  };
  movies[movieIndex] = updateMovie
  return res.status(200).json(movies[movieIndex]);
})
app.use((req, res, next) => {
  res.status(404).json({ message: "404 not fund" });
  next();
});
app.listen(port, () => {
  console.log(`this server its here http://localhost:${port}`);
});
