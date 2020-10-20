import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HeroImage from '../assets/catalogue-amico.svg';
import AllBestSellers from '../components/AllBestSellers';

const HeroStyles = styled.div`
  div:nth-of-type(1) {
  }
  div:nth-of-type(2) {
  }

  @media (max-width: 500px) {
  }

  @media (min-width: 501px) and (max-width: 1024px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1.5fr 1.5fr;
    grid-gap: 20px;
  }
`;

const HomePage = (props) => {
  const allBestSellers = props.data.allBestSeller.nodes;
  return (
    <div>
      <HeroStyles>
        <div>
          <h1>Good Hair Reflects Your Story And Your Spirit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <HeroImage />
        </div>
      </HeroStyles>
      <div>
        <AllBestSellers data={allBestSellers} />
      </div>
    </div>
  );
};

export default HomePage;

export const query = graphql`
  {
    allBestSeller(filter: { active: { eq: true } }) {
      nodes {
        active
        name
        slug
      }
    }
  }
`;
