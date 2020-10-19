import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavStyles = styled.nav`
  margin-bottom: 40px;
`;

const Nav = () => (
  <NavStyles>
    <div>
      <Link to="/">Home</Link> - Navigation & Logo
    </div>
  </NavStyles>
);

export default Nav;
