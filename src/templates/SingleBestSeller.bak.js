import React from 'react';
import { graphql } from 'gatsby';
import Ratings from 'react-ratings-declarative';
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

  :hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.22);
  }

  .header {
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: flex-start;
    gap: 20px;

    .image {
    }
  }
  .badge {
    background-color: var(--red);
    border-radius: 999px;
    color: var(--white);
    font-weight: bold;
    font-size: 24px;
    position: relative;
    top: -36px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    line-height: 28px;
    left: -42px;
    display: flex;
  }

  .title {
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
      <div className="header">
        <div className="image">
          <span className="badge">{rank}</span>
          <img src={image} alt={title} />
        </div>

        <div>
          <div className="title">
            <Truncate lines={2}>{title}</Truncate>
          </div>
          <div className="body">
            <br />
            asin: {asin}
            <br />
            price: {price.value} - {price.currency}
            <br />
            {rating !== null && (
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
            )}
            <br />
            {rating} - {ratings_total} reviews
            <br />
            Button
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
