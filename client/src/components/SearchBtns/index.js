import React from "react";

const SearchBtn = props => {
  console.log(props.style);
  return (
    <button
      className={props.className}
<<<<<<< HEAD
      onClick={props.onClick}
=======
      onClick={props.action}
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <h1>{props.title}</h1>
    </button>
  );
};

<<<<<<< HEAD
export default SearchBtn;
=======
export default SearchBtn;
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
