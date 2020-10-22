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

const CategoryIcon = ({ icon, size }) => {
  const Component = icons[icon];
  return (
    <IconStyle>
      <Component size={size} />
    </IconStyle>
  );
};

export default CategoryIcon;
