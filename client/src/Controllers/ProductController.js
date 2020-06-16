import axios from "axios";
import config from "../config";
import Utils from "../Utils";
const { getNestedValue } = Utils;

function ProductController() {
  // Fetch a single product
  async function fetchProduct(id) {
    let fetchResult = await axios.get(`${config.apiUrl}/products/${id}`);
    let data = getNestedValue(fetchResult, "data", {});
    let status = getNestedValue(data, "status", "failure");
    let payload = null;
    if (status === "success") {
      payload = getNestedValue(data, "payload", null);
    }
    return payload;
  }

  // Fetch the list of all products
  async function fetchProductList() {
    let fetchResult = await axios.get(`${config.apiUrl}/products`);
    let data = getNestedValue(fetchResult, "data", {});
    let status = getNestedValue(data, "status", "failure");
    let payload = null;
    if (status === "success") {
      payload = getNestedValue(data, "payload", null);
    }
    return payload;
  }

  // Create a product
  async function storeProduct(formData) {
    let fetchResult = await axios.post(`${config.apiUrl}/products`, formData);
    let data = getNestedValue(fetchResult, "data", {});
    let status = getNestedValue(data, "status", "failure");
    let payload = null;
    if (status === "success") {
      payload = getNestedValue(data, "payload", null);
    }
    return payload;
  }

  const publicScope = {
    fetchProduct,
    fetchProductList,
    storeProduct,
  };

  function getPublic() {
    return publicScope;
  }

  return getPublic();
}

export default ProductController;
