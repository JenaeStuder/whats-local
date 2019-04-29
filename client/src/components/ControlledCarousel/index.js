import React from "react";
import TitleBackground from "../TitleBackground";
import Carousel from "react-bootstrap/Carousel";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 1,
      direction: null,
      controls: false,
      interval: 1000,
      slide: false,
      indicators: false
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const {
      index,
      direction,
      controls,
      interval,
      slide,
      indicators
    } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        controls={controls}
        interval={interval}
        slide={slide}
        indicators={indicators}
      >
        <TitleBackground />
        <Carousel.Item className="paint">
          <img
            className="d-block w-100"
            src={require("../../images/paint.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="drawing">
          <img
            className="d-block w-100"
            src={require("../../images/drawing.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="neon">
          <img
            className="d-block w-100"
            src={require("../../images/neon.jpg")}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item className="plant">
          <img
            className="d-block w-100"
            src={require("../../images/plant.jpg")}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item className="gradient">
          <img
            className="d-block w-100"
            src={require("../../images/gradient.jpg")}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
