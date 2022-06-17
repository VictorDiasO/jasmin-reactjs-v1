import React from 'react';
import logo from '../../images/jasmin-logo.svg';

import { Nav, NavLink, NavIcon, Bars, NavImg } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        {/*<NavLink to='/'>Jasmin</NavLink>*/}
        <NavLink to='/'>
          <NavImg src={logo} alt="logo" />
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
