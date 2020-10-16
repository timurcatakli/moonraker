import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

const MainStyle = styled.div`
  width: 1366px;
  margin: 20px auto;
`;

const MainLayout = (props) => {
  const { children } = props;
  return (
    <MainStyle>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </MainStyle>
  );
};

export default MainLayout;
