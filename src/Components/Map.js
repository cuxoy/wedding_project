import React from "react";
import styled from "styled-components";

export const Map = () => {
  return (
    <>
      <MapInner>
        <MapTitle id="map">
          Як дістатись до місця проведення свята?
          <br />
          <span>село Іванків, вул.Зоряна, буд.26</span>
        </MapTitle>
        <GoogleMap>
          <iframe
            id="map"
            src="https://maps.google.com/maps?q=50.3287458712176, 31.043292306822906&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="1100"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </GoogleMap>
      </MapInner>
    </>
  );
};

const MapInner = styled.div`
  position: relative;
  max-width: 1050px;
  height: auto;
  padding: 50px 0;
  margin: 0 auto;
`;

const MapTitle = styled.h2`
  text-align: center;
  font-size: 56px;
  font-weight: 400;
  font-family: "Caveat", cursive;
  margin-bottom: 20px;
  span {
    font-size: 33px;
  }

  @media (max-width: 768px) {
    font-size: 46px;
  }
`;

const GoogleMap = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  iframe {
    margin: 0 auto;
  }
`;
