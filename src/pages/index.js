import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HeroImage from '../assets/svgs/catalogue-amico.svg';
import AllBestSellers from '../components/AllBestSellers';

const HeroStyles = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;

  @media (min-width: 300px) and (max-width: 909px) {
    grid-template-columns: 1fr;
    .hero {
      display: none;
    }

    h1 {
      font-size: 1.4em;
    }
    p {
      letter-spacing: -0.5px;
      line-height: 1.2em;
      font-size: 1em;
    }
  }

  @media (min-width: 910px) {
    grid-template-columns: 1fr 1fr;
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
        <div className="hero">
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
        icon
      }
    }
  }
`;
