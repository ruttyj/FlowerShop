import React from "react";
import "./LoadingSquare.scss";
import Utils from "../../../Utils";
const { classes } = Utils;

function LoadingSquare() {
  return (
    <div {...classes("loading-square")}>
      <div {...classes("wrapper")}>
        <div {...classes("square")}></div>
        <div {...classes("description")}>Loading...</div>
      </div>
    </div>
  );
}

export default LoadingSquare;
