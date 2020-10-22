import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HeroImage from '../assets/svgs/catalogue-amico.svg';
import AllBestSellers from '../components/AllBestSellers';

const HeroStyles = styled.div`
  @media (min-width: 0px) and (max-width: 812px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 813px) and (max-width: 1024px) {
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
          <h1>Good Hair Reflects Your Story And Your Spirit---</h1>
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
        icon
      }
    }
  }
`;
