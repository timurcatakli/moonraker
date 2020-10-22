import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.footer`
  font-size: 18px;
  text-transform: lowercase;
  margin: 40px auto;
  text-align: center;
  border-top: 1px solid var(--grey);
  padding: 20px 0px;
  .heart {
    color: var(--red);
  }
`;

const Footer = () => (
  <StyleWrapper>
    Made with <span className="heart">&hearts;</span> in Silicon Valley
  </StyleWrapper>
);

export default Footer;
