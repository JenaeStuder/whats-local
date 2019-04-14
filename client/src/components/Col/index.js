import React from "react";

<<<<<<< HEAD

function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
  }
  export default Col
=======

function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default Col;

>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc
