import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="fs-2 ">Welcome to Gadget Monkey</h1>
            <p className="fs-6 ">
              You can find the best headphone in the world here for people who
              just want to waste time in front of funky world.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h1 className="fs-2">Be the freak like a monkey</h1>
            <p className="fs-6 ">
              Explore the monkey you can fiend some banana and some freaky
              Headphones
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
