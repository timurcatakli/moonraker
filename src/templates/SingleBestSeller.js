import React from 'react';
import { graphql } from 'gatsby';
import Ratings from 'react-ratings-declarative';
import Img from 'gatsby-image';
import Truncate from 'react-truncate';
import styled from 'styled-components';

const BestSellerStyle = styled.div``;

const GridStyle = styled.div`
  --radius: 6px;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

const CardStyle = styled.div`
  cursor: pointer;
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
  console.log(rating);
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
          {rating !== null && (
            <RatingsStyle>
              <div>
                <Ratings
                  rating={rating}
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
              <div>{rating} / 5</div>
            </RatingsStyle>
          )}
        </div>
        <div className="body">
          <div className="body-row">
            <div className="label">price:</div>
            <div className="label">total reviews:</div>
            <div className="value">
              <strong>{price.value}</strong>
              <sup className="usd">{price.currency}</sup>
            </div>
            <div className="value">{ratings_total}</div>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default function SingleBestSellerPage(props) {
  const products = props.data.allProduct.nodes;
  const { pageContext } = props;
  const { name, description } = pageContext;
  return (
    <BestSellerStyle>
      <h5>Top 50 Amazon Best Sellers</h5>
      <h1>{name}</h1>
      <p>{description}</p>
      <GridStyle>
        {products.map((product) => (
          <Card data={product} />
        ))}
      </GridStyle>
    </BestSellerStyle>
  );
}

export const query = graphql`
  {
    allProduct {
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
        sub_title {
          text
          link
        }
        price_lower {
          value
          currency
        }
        price_upper {
          value
          currency
        }
      }
    }
  }
`;
