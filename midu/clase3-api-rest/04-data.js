const express = require("express");
const app = express();
const port = process.argv[2] ?? 8001;

app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\paletas.html");
});
app.get("/user/:name", (req, res) => {
  const { name } = req.params;
  res.end(`<h1>Hola ${name} como estas`);
});
app.get("/search", (req, res) => {
  const { search } = req.query;
  if (search === "books") {
    return res.end("<h1>Lista de libros de javascript</h1>" + search);
  }
  res.end("<h1>libros no encontrados</h1>");
});
app.post("/user", (req, res) => {
  console.log(req.body);
  res.end("Info transferida");
});
// request params
app.listen(port, () => {
  console.log(`listhen this server in http://localhost:${port}`);
});
