import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyleWrapper = styled.div`
  display: grid;

  @media (min-width: 0px) and (max-width: 812px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 813px) and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(7, 1fr);
  }

  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const data = [
  {
    label: 'Top Ranked',
    sortValue: 'rank',
    sortDirection: 'asc',
  },
  {
    label: 'Cheapest First',
    sortValue: 'price',
    sortDirection: 'asc',
  },
  {
    label: 'Expensive First',
    sortValue: 'price',
    sortDirection: 'desc',
  },
  {
    label: 'Most Reviews',
    sortValue: 'ratings_total',
    sortDirection: 'desc',
  },
  {
    label: 'Least Reviews',
    sortValue: 'ratings_total',
    sortDirection: 'asc',
  },
  {
    label: 'Top Rated',
    sortValue: 'rating',
    sortDirection: 'desc',
  },
  {
    label: 'Lowest Rated',
    sortValue: 'rating',
    sortDirection: 'asc',
  },
];
const ButtonsList = (props) => {
  const { handleAction, filter } = props;
  return (
    <StyleWrapper>
      {data.map((button) => {
        const { label, sortValue, sortDirection } = button;
        const isActive =
          filter.sortValue === sortValue &&
          filter.sortDirection === sortDirection;
        return (
          <div className="button" key={label}>
            <Button
              active={isActive}
              onAction={() =>
                handleAction({
                  sortValue,
                  sortDirection,
                })
              }
            >
              {label}
            </Button>
          </div>
        );
      })}
    </StyleWrapper>
  );
};

export default ButtonsList;
