import React from "react";
import "./style.scss";
import Utils from "../../../Utils/";
const { isFunc, classes } = Utils;

const RemoveFromCartButton = (props) => {
  let { onClick } = props;
  onClick = isFunc(onClick) ? onClick : () => {};
  return (
    <button {...classes("warning-action-btn")} onClick={onClick}>
      Remove from Cart
    </button>
  );
};

export default RemoveFromCartButton;
