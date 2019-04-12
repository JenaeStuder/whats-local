import React from "react";
import "./style.css";

function Update({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export default Update;


