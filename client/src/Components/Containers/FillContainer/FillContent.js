import React from "react";

export default ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
