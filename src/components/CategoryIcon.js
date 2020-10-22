import React from 'react';
import styled from 'styled-components';
import {
  BsChatDots,
  BsChatSquareQuote,
  BsColumnsGap,
  BsEggFried,
} from 'react-icons/bs';

const icons = {
  BsChatDots,
  BsChatSquareQuote,
  BsColumnsGap,
  BsEggFried,
};

const IconStyle = styled.div`
  color: var(--red);
`;

const CategoryIcon = ({ icon }) => {
  const Component = icons[icon];
  return (
    <IconStyle>
      <Component size={32} />
    </IconStyle>
  );
};

export default CategoryIcon;
