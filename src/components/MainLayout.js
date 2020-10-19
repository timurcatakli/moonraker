import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

const MainWrapper = styled.div`
  .top-bar {
    position: fixed;
    top: 0;
    height: 2px;
    width: 100%;
  }
  @media (max-width: 500px) {
    .top-bar {
      background-color: var(--red);
    }
  }

  @media (min-width: 501px) and (max-width: 1024px) {
    .top-bar {
      background-color: var(--yellow);
    }
  }

  @media (min-width: 1025px) {
    .top-bar {
      background-color: var(--black);
    }
  }
`;

const MainStyle = styled.div`
  margin: 20px;
  @media (min-width: 1025px) {
    width: 1025px;
    margin: 20px auto;
    .top-bar {
      background-color: var(--black);
    }
  }
`;

const MainLayout = (props) => {
  const { children } = props;
  return (
    <MainWrapper>
      <div className="top-bar">&nbsp;</div>
      <MainStyle>
        <GlobalStyles />
        <Typography />
        <Nav />
        {children}
        <Footer />
      </MainStyle>
    </MainWrapper>
  );
};

export default MainLayout;
