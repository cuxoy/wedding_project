import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  return (
    <>
      <HeaderBurgerMenu>
        <BurgerMenu />
      </HeaderBurgerMenu>
      <NavWrapper>
        <Link to="date" spy={true} smooth={true} offset={0} duration={500}>
          <NavLink>Дата</NavLink>
        </Link>
        <Link to="map" spy={true} smooth={true} offset={0} duration={500}>
          <NavLink>Як дістатись</NavLink>
        </Link>
        <Link to="dressCode" spy={true} smooth={true} offset={0} duration={500}>
          <NavLink>Деталі</NavLink>
        </Link>
      </NavWrapper>
      <Title>Дмитро + Таміла</Title>
    </>
  );
};

const HeaderBurgerMenu = styled.div`
  display: none !important;

  @media (max-width: 768px) {
    display: block !important;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 26px;
  margin-bottom: 482px;

  @media (max-width: 768px) {
    display: none;
    margin-bottom: 273px;
    padding: 26px 0;
  }
`;

const NavLink = styled.a`
  font-size: 35px;
  font-family: "Caveat", cursive;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 117px;
  font-weight: 400;
  padding-right: 77px;
  color: #ffffff;
  font-family: "Caveat", cursive;

  @media (max-width: 768px) {
    font-size: 105px;
    font-weight: 400;
    padding-right: 23px;
    padding-top: 400px;
  }
`;
