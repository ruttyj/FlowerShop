const express = require("express");
const router = express.Router();
const request = require("request");

const ProductController = require("../Controllers/ProductController");
const mProductController = ProductController();

const Utils = require("../Utils/");
const { getNestedValue } = Utils;

// Get data required to create a product
router.get("/create", async (req, res) => {
  const description = getNestedValue(req, ["body", "description"], "");
  let result = await mProductController.handleCreate();
  res.json(result);
});

// Store a product
router.post("", async (req, res) => {
  const description = getNestedValue(req, ["body", "description"], "");
  const title = getNestedValue(req, ["body", "title"], "");
  const price = getNestedValue(req, ["body", "price"], "");
  const image_url = getNestedValue(req, ["body", "image_url"], "");
  const rating = 0;
  let result = await mProductController.handleStore({
    description,
    title,
    price,
    rating,
    image_url,
  });
  res.json(result);
});

// Get all product
router.get("", async (req, res) => {
  let result = await mProductController.handleShowAll();
  result.debig = "/";
  res.json(result);
});

// Get a product
router.get("/:id", async (req, res) => {
  const id = getNestedValue(req, ["params", "id"], 0);
  let result = await mProductController.handleShow(id);
  result.id = id;
  result.debig = "/:id";
  res.json(result);
});

// get data required to edit a product
router.get("/:id/edit", async (req, res) => {
  const id = getNestedValue(req, ["params", "id"], 0);
  let result = await mProductController.handleEdit(id);
  res.json(result);
});

// Update a flower
router.put("/:id", async (req, res) => {
  const id = getNestedValue(req, ["params", "id"], 0);
  const description = getNestedValue(req, ["body", "description"], "");
  let result = await mProductController.handleUpdate(id, { description });
  res.json(result);
});

// Delete a flower
router.delete("/:id", async (req, res) => {
  const id = getNestedValue(req, ["body", "id"], 0);
  let result = await mProductController.handleDestory(id);
  res.json(result);
});

module.exports = router;
