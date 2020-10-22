import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';

const StyleWrapper = styled.div`
  display: grid;
  gap: 10px;

  @media (min-width: 300px) and (max-width: 414px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 415px) and (max-width: 909px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 910px) {
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
  grid-gap: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;

  .label {
    font-size: 28px;
    line-height: 26px;
    text-align: center;
  }
`;

const Category = (props) => {
  const { name, slug, icon } = props.data;

  return (
    <Link to={`/amazon-best-sellers/${slug}`}>
      <CardStyle>
        <div>
          <CategoryIcon icon={icon} size={48} />
        </div>
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
