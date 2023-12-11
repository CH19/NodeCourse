const http = require("node:http");
const port = process.argv[2] ?? 8000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.end(
    '<h1>Hola mundo</h1><button>Click bro</button> <script>document.querySelector("button").addEventListener("click",()=> alert("hola mundo"))</script>'
  );
});
server.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`);
});
