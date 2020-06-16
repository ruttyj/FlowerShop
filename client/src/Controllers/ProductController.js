import products from "../Data";
import Utils from "../Utils";
import axios from "axios";

const apiUrl = "http://localhost:5000";

const { isDef, getNestedValue } = Utils;
function ProductController() {
  async function fetchProduct(id) {
    let fetchResult = await axios.get(`${apiUrl}/products/${id}`);
    let data = getNestedValue(fetchResult, "data", {});
    let status = getNestedValue(data, "status", "failure");
    let payload = null;
    if (status === "success") {
      payload = getNestedValue(data, "payload", null);
    }
    return payload;
  }

  async function fetchProductList() {
    let fetchResult = await axios.get(`${apiUrl}/products`);
    let data = getNestedValue(fetchResult, "data", {});
    let status = getNestedValue(data, "status", "failure");
    let payload = null;
    if (status === "success") {
      payload = getNestedValue(data, "payload", null);
    }
    return payload;
  }

  async function doTheThing(formData) {
    let fetchResult = await axios.post(`${apiUrl}/products`, formData);
    let data = getNestedValue(fetchResult, "data", {});
    let status = getNestedValue(data, "status", "failure");
    console.log("data", data);
    let payload = null;
    if (status === "success") {
      payload = getNestedValue(data, "payload", null);
    }
    return payload;
  }

  const publicScope = {
    fetchProduct,
    fetchProductList,
    doTheThing,
  };

  function getPublic() {
    return publicScope;
  }

  return getPublic();
}

export default ProductController;
