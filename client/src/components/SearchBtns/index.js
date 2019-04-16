import React from "react";

const SearchBtn = props => {
  console.log(props.style);
  return (
    <button
      className={props.className}


      onClick={props.onClick}

      


      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <h1>{props.title}</h1>
    </button>
  );
};

export default SearchBtn;
