import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Ratings from 'react-ratings-declarative';
import Truncate from 'react-truncate';
import styled from 'styled-components';
import ButtonsList from '../components/ButtonsList';

const BestSellerStyle = styled.div``;
const HeaderStyle = styled.div`
  display: grid;
  @media (min-width: 300px) and (max-width: 909px) {
    grid-template-columns: 1fr;
    align-items: center;
    h1 {
      font-size: 1.4em;
    }
    p {
      letter-spacing: -0.5px;
      line-height: 1.2em;
      font-size: 1em;
    }
    .date {
      margin: 10px 0px;
      font-size: 18px;
      text-align: center;
    }
    .title {
      text-align: center;
    }
  }

  @media (min-width: 910px) {
    grid-template-columns: 1fr 1fr;
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

  @media (min-width: 0px) and (max-width: 812px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 813px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardStyle = styled.div`
  cursor: pointer;
  background-color: white;
  border: 1px solid var(--grey);
  height: 200px;
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: 0 4px 0px rgba(0, 0, 0, -0.75), 0 4px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: flex-start;
  gap: 20px;

  :hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.22);
  }

  .image {
    background-color: tomato;
    display: inline-flex;
    position: relative;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
  }

  .badge {
    left: -21px;
    top: -20px;
    position: absolute;
    display: inline-flex;
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

  .title {
    margin-bottom: 20px;
  }

  .body {
    .body-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      color: var(--black);
      justify-content: space-between;
      align-items: baseline;
      gap: 0px;

      .label {
        font-size: 16px;
      }
      .value {
        font-size: 28px;
      }
      .usd {
        font-size: 12px;
      }
    }
  }
`;

const RatingsStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: baseline;

  div:nth-of-type(even) {
    font-size: 14px;
    font-weight: bold;
    color: var(--yellow);
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
    <CardStyle>
      <div>
        <span className="image">
          <span className="badge">{rank}</span>
          <img src={image} alt={title} />
        </span>
      </div>
      <div>
        <div className="title">
          <Truncate lines={2}>{title}</Truncate>
          <br />

          <RatingsStyle>
            <div>
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
            </div>
            <div>{rating || 0} / 5</div>
          </RatingsStyle>
        </div>
        <div className="body">
          <div className="body-row">
            <div className="label">price:</div>
            <div className="label">total reviews:</div>
            <div className="value">
              <strong>{price?.value || 'n/a'}</strong>
              <sup className="usd">{price?.currency}</sup>
            </div>
            <div className="value">{ratings_total || 'n/a'}</div>
          </div>
        </div>
      </div>
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
          <h5>Top 50 Amazon Best Sellers</h5>
          <h1>{name}</h1>
        </div>
        <div className="date">
          last updated:
          <br />
          <strong>{buildDate}</strong>
        </div>
      </HeaderStyle>
      {/* <p>{description}</p>
      <ButtonsList handleAction={handleFilterChange} filter={filter} />
      <GridStyle>
        {filteredProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </GridStyle> */}
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
