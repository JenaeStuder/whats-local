import React from "react";
import TitleBackground from "../TitleBackground";

function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel"
      data-ride="carousel"
      data-interval="2000"
    >
      <div className="carousel-inner">
        <TitleBackground />
        <div className="carousel-item active paint">
          <img
            className="d-block w-100"
            src={require("../../images/paint.jpg")}
          />
        </div>
        <div className="carousel-item drawing">
          <img
            className="d-block w-100"
            src={require("../../images/drawing.jpg")}
          />
        </div>

        <div className="carousel-item neon">
          <img

            className="d-block w-100"


            src={require("../../images/neon.jpg")}

          />
        </div>

        <div className="carousel-item plant">
          <img
            className="d-block w-100"
            src={require("../../images/plant.jpg")}
          />
        </div>
        <div className="carousel-item gradient">
          <img
            className="d-block w-100"
            src={require("../../images/gradient.jpg")}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
