import React from "react";
import styled from "styled-components";
import { guests } from "../Guests/guests";

export const Table = () => {
  const URLname = window.location.pathname;

  let guest;

  for (let key in guests) {
    if (`/${key}` === URLname) {
      guest = guests[key];
    }
  }

  return guest ? (
    <>
      <Title>Шукайте своє місце за святковим столом №{guest.number}</Title>
      <TableWrapper>
        <Number>{guest.number}</Number>
        <TableImg>
          <img src="./images/table.png" alt="table" />
        </TableImg>
      </TableWrapper>
    </>
  ) : null;
};

const TableWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.div`
  font-size: 46px;
  color: #000000;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 53px;
  /* max-width: 100%; */

  @media (max-width: 768px) {
    /* max-width: 400px; */
    font-size: 39px;
  }
`;

const Number = styled.div`
  position: absolute;
  color: #ffffff;
  top: -19px;
  left: calc(50% - 47px);
  font-size: 123px;

  @media (max-width: 768px) {
    left: calc(50% - 35px);
    font-size: 86px;
  }
`;

const TableImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    & img {
      max-width: 300px;
    }
  }
`;
