import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import HeroImage from '../assets/catalogue-amico.svg';

const HeroStyles = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  div:nth-of-type(1) {
  }
  div:nth-of-type(2) {
  }
`;

const HomePage = () => (
  <HeroStyles>
    <div>
      <h1>Good Hair Reflects Your Story And Your Spirit</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button type="primary" size="large">
        Primary Button
      </Button>
    </div>
    <div>
      <HeroImage />
    </div>
  </HeroStyles>
);

export default HomePage;
