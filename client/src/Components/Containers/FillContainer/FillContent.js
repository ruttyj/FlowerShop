import React from "react";

export default ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
