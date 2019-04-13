import React from "react";
import SearchBtn from "../SearchBtns";

function SearchJumbo() {
  return (
    <div>
      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="artistBtn"
          type="submit"
          //onClick=""
          title="artist"
          // backgroundImage="https"
        />
      </div>

      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="cityBtn"
          type="submit"
          //onClick=""
          title="city"
          // backgroundImage="https"
        />
      </div>

      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="categorybtn"
          type="submit"
          //onClick=""
          title="category"
          // backgroundImage="https"
        />
      </div>
    </div>
  );
}

export default SearchJumbo;
