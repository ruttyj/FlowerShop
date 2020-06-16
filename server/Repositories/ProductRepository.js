const pool = require("../db");
const isDef = (v) => v !== undefined && v !== null;

function ProductRepository() {
  async function createItem({ title, description, price, image_url }) {
    price = isDef(price) ? parseFloat(price) : 0;

    const newFlower = await pool.query(
      "INSERT INTO flowers (title, description, price, image_url, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, price, image_url, 0]
    );
    return isDef(newFlower) && isDef(newFlower.rows) && isDef(newFlower.rows[0])
      ? newFlower.rows[0]
      : null;
  }

  async function overwriteItem(id, { description }) {
    await pool.query("UPDATE flowers SET description= $1 WHERE id = $2", [
      description,
      id,
    ]);
  }

  async function deleteItem(id) {
    await pool.query("DELETE FROM flowers WHERE id = $1", [id]);
  }

  async function listAllItems() {
    const allFlowers = await pool.query("SELECT * FROM flowers");
    return allFlowers.rows;
  }

  async function getItem(id) {
    const flowers = await pool.query("SELECT * FROM flowers WHERE id = $1", [
      parseInt(id, 10),
    ]);
    console.log("flowers", flowers);
    return isDef(flowers) && isDef(flowers.rows) && isDef(flowers.rows[0])
      ? flowers.rows[0]
      : null;
  }

  const publicScope = {
    createItem,
    overwriteItem,
    deleteItem,
    listAllItems,
    getItem,
  };

  function getPublic() {
    return publicScope;
  }

  return getPublic();
}

module.exports = ProductRepository;
