const express = require("express");
const morgan = require("morgan");
const products = require("./products.json");
const { randomUUID } = require("node:crypto");
let newProducts = products.map((product) => {
  return {
    id: randomUUID(),
    ...product,
  };
});
const app = express();
const port = process.argv[2] ?? 7999;
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.json({ messange: "Bienvenido a nuestra tienda consulta un producto" });
});
app.get("/products", (req, res) => {
  res.json(newProducts);
});
app.get("/products/:name", (req, res) => {
  const { name } = req.params;
  const userActual = newProducts.find(
    (produc) => produc.name.toLowerCase() === name.toLowerCase()
  );
  console.log(userActual);
  if (userActual != undefined) {
    res.status(200);
    return res.json(userActual);
  }
  return res.json({ message: "error user no encontrado" });
});
app.post("/products", (req, res) => {
  const data = req.body;
  if (data != null || data != undefined) {
    const newProduct = {
      id: randomUUID(),
      ...data,
    };
    newProducts.push(newProduct);
    res.status(201);
    return res.json(newProducts);
  }
  res.json({ messange: "failed in creating product" });
});
app.put("/products/:name", (req, res) => {
  const { name } = req.params;
  const data = req.body;
  const productsFund = newProducts.find((p) => p.name === name);
  if (!productsFund) {
    return res.status(404).json({ message: "product inexist" });
  }

  const prodcutsMap = newProducts.map((p) =>
    p.name === name ? { ...p, ...data } : p
  );
  newProducts = prodcutsMap;
  return res.status(201).json(newProducts);
});
app.delete("/products/:name", (req, res) => {
  const { name } = req.params;
  const withoutProducts = newProducts.filter((e) => e.name != name);
  if (withoutProducts != undefined) {
    newProducts = withoutProducts;
    res.status(202);
    return res.json(newProducts);
  }
  return res.json({ message: "producto no eliminado" });
});
app.use((req, res, next) => {
  res.status(404);
  res.end('<h1 style"color:crimson">Error 404 no existe esta ruta</h1>');
  next();
});
app.listen(port, () => {
  console.log(`server in port http://localhost:${port}`);
});
