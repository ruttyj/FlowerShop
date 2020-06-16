const ProductRepository = require("../Repositories/ProductRepository");

// Contains all logic for controlling products on the server side
function ProductController() {
  const mProductRepository = ProductRepository();

  // Get data required for creating a product
  async function handleCreate() {
    return {
      status: "success",
      payload: {},
    };
  }

  // Actually handle the saving of a product
  async function handleStore(data) {
    let status = "failure";
    let payload = null;
    try {
      payload = await mProductRepository.createItem(data);
      status = "success";
    } catch (err) {
      console.error(err.message);
    }
    return { status, payload };
  }

  // Show a product
  async function handleShow(id) {
    let status = "failure";
    let payload = null;
    try {
      payload = await mProductRepository.getItem(id);
      status = "success";
    } catch (err) {
      console.error(err.message);
    }
    return { status, payload };
  }

  async function handleShowAll() {
    let status = "failure";
    let payload = null;
    try {
      payload = await mProductRepository.listAllItems();
      status = "success";
    } catch (err) {
      console.error(err.message);
    }
    return { status, payload };
  }

  // Get data required for an edit
  async function handleEdit(id) {
    return handleShow(id);
  }

  // Actually update an item
  async function handleUpdate(id, { description }) {
    let status = "failure";
    let payload = null;
    try {
      await mProductRepository.overwriteItem(id, { description });
      status = "success";
    } catch (err) {
      console.error(err.message);
    }
    return { status, payload };
  }

  // Destroys an item
  async function handleDestory(id) {
    let status = "failure";
    let payload = null;
    try {
      await mProductRepository.deleteItem(id);
      status = "success";
    } catch (err) {
      console.error(err.message);
    }
    return { status, payload };
  }

  const publicScope = {
    handleCreate,
    handleStore,
    handleShow,
    handleShowAll,
    handleEdit,
    handleUpdate,
    handleDestory,
  };

  function getPublic() {
    return publicScope;
  }

  return getPublic();
}

module.exports = ProductController;
