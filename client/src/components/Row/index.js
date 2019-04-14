import React from "react";

<<<<<<< HEAD

function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  }
  export default Row;
=======

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;

>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc
