import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';

const StyleWrapper = styled.div`
  display: grid;
  gap: 10px;

  @media (min-width: 0px) and (max-width: 812px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 813px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const CardStyle = styled.div`
  background-color: var(--yellow);
  border-radius: var(--radius);
  box-sizing: border-box;
  color: var(--black);
  display: grid;
  grid-template-columns: auto auto;
  height: 120px;
  gap: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Category = (props) => {
  const { name, slug, icon } = props.data;

  return (
    <Link to={`/amazon-best-sellers/${slug}`}>
      <CardStyle>
        <CategoryIcon icon={icon} />
        <div className="label">{name}</div>
      </CardStyle>
    </Link>
  );
};

const AllBestSellers = (props) => {
  const { data } = props;
  return (
    <StyleWrapper>
      {data.map((category) => (
        <Category data={category} />
      ))}
    </StyleWrapper>
  );
};

export default AllBestSellers;
