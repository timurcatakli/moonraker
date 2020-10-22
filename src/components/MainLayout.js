import React from 'react';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

const MainLayout = (props) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  const { children } = props;
  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <Typography />
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
