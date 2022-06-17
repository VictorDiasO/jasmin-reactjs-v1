import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiPerfumeBottle } from 'react-icons/gi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #000;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  @media screen and (max-width: 500px) { 
    z-index: 10;
    margin-top: 10%;
  }

  @media screen and (min-width: 501px) { 
    z-index: 10;
    margin-top: 2.1rem;
  }
`;

export const NavImg = styled.img`
  display: flex;
  margin-left: -25%;
  /* margin-top: 12px; */

  @media screen and (max-width: 500px) {
    margin-top: -9%;
  }

  @media screen and (min-width: 501px) {
    margin-top: 15px;
  }
`;

export const Barss = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const Bars = styled(GiPerfumeBottle)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
