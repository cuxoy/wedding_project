import React from "react";
import styled from "styled-components";

export const Conditions = () => {
  return (
    <>
      <Shoes>
        P.S. Наше свято буде проходити на свіжому повітрі, тож радимо взувати
        зручне взуття
      </Shoes>
    </>
  );
};

const Shoes = styled.div`
  text-align: center;
  font-size: 46px;
  padding-bottom: 57px;
  padding-top: 50px;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;
