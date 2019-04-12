import react from "react";
import "./style.css";

function Update({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

function UpdateItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export default Update;
export default UpdateItem;
