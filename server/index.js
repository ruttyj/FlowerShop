const express = require("express");
const request = require("request");
const config = require("./config");

const app = express();
const cors = require("cors");

const ProductRoutes = require("./Routes/ProductRoutes");

// Middleware =======================
app.use(cors());
app.use(express.json());

// Routes ===========================
app.use("/products", ProductRoutes);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

app.get(/.*/, (req, res) => {
  request(`http://localhost:${config.portNumber}/`)
    .on("error", (err) => res.sendFile("loading.html", { root: __dirname }))
    .pipe(res);
});
