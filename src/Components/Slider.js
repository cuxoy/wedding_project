import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Slider = () => {
  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      showArrows
      swipeable
      showThumbs={false}
    >
      <div>
        <img src="./images/1-min.jpg" />
      </div>
      <div>
        <img src="./images/2-min.jpg" />
      </div>
      <div>
        <img src="./images/51-min.jpg" />
      </div>
      <div>
        <img src="./images/53-min.jpg" />
      </div>
      <div>
        <img src="./images/27-min.jpg" />
      </div>
      <div>
        <img src="./images/92-min.jpg" />
      </div>
    </Carousel>
  );
};
