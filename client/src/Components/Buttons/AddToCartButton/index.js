import React from "react";
import "./style.scss";
import Utils from "../../../Utils/";
const { isFunc, classes } = Utils;

const AddToCartButton = (props) => {
  let { onClick } = props;
  onClick = isFunc(onClick) ? onClick : () => {};
  return (
    <button {...classes("primary-action-btn")} onClick={onClick}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
