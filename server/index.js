const express = require("express");
const request = require("request");

const app = express();
const cors = require("cors");
const pool = require("./db");
const ProductRepository = require("./Repositories/ProductRepository");
const productRepository = ProductRepository();

const Utils = require("./Utils/");

const ProductController = require("./Controllers/ProductController");
const mProductController = ProductController();
const { isDef, getNestedValue } = Utils;

const ProductRoutes = require("./Routes/ProductRoutes");

const portNumber = 3000;

// Middleware =======================
app.use(cors());
app.use(express.json());

// Routes ===========================
app.use("/products", ProductRoutes);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

app.get(/.*/, (req, res) => {
  request(`http://localhost:${portNumber}/`)
    .on("error", (err) => res.sendFile("loading.html", { root: __dirname }))
    .pipe(res);
});
