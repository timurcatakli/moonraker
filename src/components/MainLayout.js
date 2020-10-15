import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';

const MainStyle = styled.div`
  width: 1366px;
  margin: 20px auto;
  background-color: cornsilk;
`;

const MainLayout = (props) => {
  const { children } = props;
  return (
    <MainStyle>
      <GlobalStyles />
      <Nav />
      {children}
    </MainStyle>
  );
};

export default MainLayout;
