import React from "react";

<<<<<<< HEAD
function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;
=======

function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  }
  export default Row;
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
