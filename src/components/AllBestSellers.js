import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
const CardStyle = styled.div`
  background-color: var(--grey);
  height: 120px;
  padding: 20px;
  border-radius: 12px;
  display: inline-block;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.04);
`;

const Category = (props) => {
  const { name, slug } = props.data;
  return (
    <Link to={`/amazon-best-sellers/${slug}`}>
      <CardStyle>{name}</CardStyle>
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
