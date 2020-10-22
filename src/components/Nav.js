import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { RiBearSmileLine } from 'react-icons/ri';

const NavStyles = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--grey);

  .title {
    color: #2e2e2e;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    align-items: center;
    .curious {
      color: var(--black);
      font-weight: 100;
      text-transform: lowercase;
    }
    .bear {
      color: var(--black);
      font-weight: 100;
      text-transform: lowercase;
    }
  }
  .navigation {
    align-self: baseline;
    justify-self: flex-end;
  }
  .logo {
    color: var(--red);
  }
`;

const Nav = () => (
  <NavStyles>
    <Link to="/">
      <div className="title">
        <div className="curious">smart</div>
        <div className="logo">
          <RiBearSmileLine size="48px" />
        </div>
        <div className="bear">Bear</div>
      </div>
    </Link>
  </NavStyles>
);

export default Nav;
