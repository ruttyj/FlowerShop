import React, { useState } from "react";
import "./SideBar.scss";
import Utils from "../../Utils";
const { isDef, isArr, isStr, classes } = Utils;

const classNames = require("classnames");

const SideBar = (props) => {
  const { children, className = "" } = props;
  const [formData, setFormData] = useState({ name: "", description: "" });

  return (
    <div>
      <div className="sidebar-space-holder"></div>
      <div
        {...classes(className, "column", "sidebar-mini", "side-bar")}
        style={{ position: "fixed", zIndex: 4 }}
      >
        <div className={classNames("full", "scroll")}>{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
