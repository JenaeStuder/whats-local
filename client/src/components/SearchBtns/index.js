import React from "react";

const SearchBtn = props => {
  console.log(props.style);
  return (
    <button
      className={props.className}
<<<<<<< HEAD
      onClick={props.action}
=======


      onClick={props.onClick}

      


>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <h1>{props.title}</h1>
    </button>
  );
};

export default SearchBtn;
