import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Ratings from 'react-ratings-declarative';
import Truncate from 'react-truncate';
import styled from 'styled-components';
import ButtonsList from '../components/ButtonsList';

const BestSellerStyle = styled.div`
  @media (min-width: 300px) and (max-width: 909px) {
    p {
      letter-spacing: -0.5px;
      line-height: 1.2em;
      font-size: 0.8em;
    }
  }
`;

const HeaderStyle = styled.div`
  display: grid;
  @media (min-width: 300px) and (max-width: 909px) {
    grid-template-columns: 1fr;
    align-items: center;
    h1 {
      font-size: 1.4em;
    }
    .date {
      margin: 10px 0px;
      font-size: 18px;
      text-align: right;
    }
    .title {
    }
  }

  @media (min-width: 910px) {
    grid-template-columns: 2fr 1fr;
    align-items: flex-end;
    .date {
      justify-self: flex-end;
      font-size: 18px;
      text-align: right;
    }
  }
`;

const GridStyle = styled.div`
  display: grid;
  gap: 30px;
  @media (min-width: 300px) and (max-width: 909px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardStyle = styled.div`
  cursor: pointer;
  border: 1px solid var(--grey);
  height: 480px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: 0 4px 0px rgba(0, 0, 0, -0.75), 0 4px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: 200px fit-content(100%) 40px fit-content(100%);
  justify-content: center;
  align-items: center;

  :hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.22);
  }

  .badge {
    width: 40px;
    height: 40px;
    border-bottom-right-radius: var(--radius);
    align-items: center;
    justify-content: center;
    background-color: var(--red);
    color: var(--white);
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }

  .image {
    text-align: center;
    position: relative;
    width: 100%; //for ie 6
  }

  h2 {
    position: absolute;
    top: -10px;
    left: -16px;
    width: 100%;
    background-color: var(--grey);
    width: 40px;
    height: 40px;
    line-height: 38px;
    border-radius: 999px;
    padding: 6px;
    font-size: 32px;
  }
  .title {
    align-self: flex-start;
    text-align: center;
    font-size: 0.8em;
  }
`;

const RatingsStyle = styled.div`
  justify-self: center;
  .rating {
    font-size: 14px;
    font-weight: bold;
    color: var(--yellow);
    margin-left: 10px;
  }
`;

const PriceReviewStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  sup {
    font-size: 0.6em;
  }
  .label {
    font-size: 0.6em;
    align-self: center;
    justify-self: center;
    color: var(--yellow);
  }
  .price-value,
  .reviews-value {
    align-self: center;
    justify-self: center;
  }
`;

export const Card = (props) => {
  const {
    title,
    rank,
    image,
    rating,
    ratings_total,
    link,
    asin,
    price,
  } = props.data;
  return (
    <CardStyle image={image}>
      <div className="image">
        <img src={image} alt={title} />
        <h2>{rank}</h2>
      </div>
      <div className="title">
        <Truncate lines={3}>{title}</Truncate>
      </div>
      <RatingsStyle>
        <div className="stars">
          <Ratings
            rating={rating || 0}
            widgetDimensions="20px"
            widgetSpacings="1px"
          >
            <Ratings.Widget widgetRatedColor="#ffc600" />
            <Ratings.Widget widgetRatedColor="#ffc600" />
            <Ratings.Widget widgetRatedColor="#ffc600" />
            <Ratings.Widget widgetRatedColor="#ffc600" />
            <Ratings.Widget widgetRatedColor="#ffc600" />
          </Ratings>
          <span className="rating">{rating || 0} / 5</span>
        </div>
      </RatingsStyle>
      <PriceReviewStyle>
        <div className="price-value">
          <strong>{price?.value || 'n/a'}</strong>
          <sup className="usd">{price?.currency}</sup>
        </div>
        <div className="reviews-value">{ratings_total || 'n/a'}</div>
        <div className="label">price</div>
        <div className="label">total reviews</div>
      </PriceReviewStyle>
    </CardStyle>
  );
};

export default function SingleBestSellerPage(props) {
  const [filter, setFilter] = useState({});
  const { pageContext, data } = props;
  const { name, description } = pageContext;
  const dir = filter.sortDirection === 'asc' ? 1 : -1;
  const buildDate = data.currentBuildDate.currentDate;

  const handleFilterChange = (params) => {
    setFilter({
      ...filter,
      ...params,
    });
  };

  const comparePrices = (a, b) => {
    const priceA = a.price?.value || 0;
    const priceB = b.price?.value || 0;
    if (priceA < priceB) {
      return dir * -1;
    }
    if (priceA > priceB) {
      return dir;
    }
    return 0;
  };

  const compareValues = (a, b) => {
    const valueA = a[filter.sortValue] || 0;
    const valueB = b[filter.sortValue] || 0;

    if (valueA < valueB) {
      return dir * -1;
    }
    if (valueA > valueB) {
      return dir;
    }
    return 0;
  };

  const filteredProducts = props.data.allProduct.nodes;
  if (filter !== null) {
    switch (filter.sortValue) {
      case 'price':
        filteredProducts.sort(comparePrices);
        break;
      default:
        filteredProducts.sort(compareValues);
    }
  }
  return (
    <BestSellerStyle>
      <HeaderStyle>
        <div className="title">
          <h5>Top 50 Best Sellers</h5>
          <h1>{name}</h1>
        </div>
        <div className="date">
          last updated:
          <br />
          <strong>{buildDate}</strong>
        </div>
      </HeaderStyle>
      <ButtonsList handleAction={handleFilterChange} filter={filter} />
      <GridStyle>
        {filteredProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </GridStyle>
    </BestSellerStyle>
  );
}

export const query = graphql`
  query AllProductsByCategoryQuery($identifier: String) {
    allProduct(filter: { identifier: { eq: $identifier } }) {
      nodes {
        title
        rank
        image
        price {
          currency
          value
        }
        rating
        ratings_total
        link
        asin
        id
        identifier
      }
    }
    currentBuildDate(currentDate: {}) {
      currentDate
    }
  }
`;
