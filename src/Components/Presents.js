import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Presents = () => {
  return (
    <>
      <PresentsInner>
        <PresentsNote>
          Дорогі гості,
          <br /> будемо дуже вдячні, якщо замість квітів ви презентуєте
          <br /> Книжки, Алкоголь або Солодощі.
          <br />
          Це буде значно корисніше та приємніше.
        </PresentsNote>
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showArrows
          swipeable
          showThumbs={false}
        >
          <div>
            <img src="./images/alcohol.jpg" />
          </div>
          <div>
            <img src="./images/books.jpg" />
          </div>
          <div>
            <img src="./images/sweets.jpg" />
          </div>
        </Carousel>
      </PresentsInner>
    </>
  );
};

const PresentsInner = styled.div`
  position: relative;
  max-width: 650px;
  height: auto;
  padding: 50px 0;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    top: -56px;
    left: calc(50% - 874px);
    height: 1390px;
    width: 818px;
    background: url(./images/flower1.png);
    z-index: -1;
    opacity: 0.5;
  }

  &:after {
    content: "";
    position: absolute;
    top: -56px;
    right: calc(50% - 874px);
    height: 1390px;
    width: 818px;
    background: url(./images/flower1.png);
    z-index: -1;
    transform: scale(-1, 1);
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    &:before {
      content: "";
      position: absolute;
      top: -657px;
      left: calc(50% - 602px);
      height: 2556px;
      width: 818px;
      background: url(./images/flower1.png);
      z-index: -1;
      opacity: 0.4;
      scale: 0.5;
    }

    &:after {
      display: none;
    }
  }
`;

const PresentsNote = styled.div`
  text-align: center;
  font-size: 46px;
  padding-bottom: 57px;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;
