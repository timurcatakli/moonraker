import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.footer`
  font-size: 0.4em;
  text-transform: lowercase;
  margin: 40px auto;
  text-align: center;
  border-top: 1px solid var(--grey);
  padding: 20px 0px;

  .heart {
    color: var(--red);
  }

  .freepik {
    margin-top: 10px;
  }
`;

const Footer = () => (
  <StyleWrapper>
    <div>
      Made with <span className="heart">&hearts;</span> in Silicon Valley
    </div>
    <div className="freepik">
      <a href="https://stories.freepik.com/business">
        Illustration by Freepik Stories
      </a>
    </div>
  </StyleWrapper>
);

export default Footer;
