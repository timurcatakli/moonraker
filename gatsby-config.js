import dotenv from 'dotenv';

dotenv.config({ path: 'env' });

export default {
  siteMetadata: {
    title: 'Moonraker',
    siteUrl: `http://www.moonraker.com`,
    description: 'Amazon Best Sellers',
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-antd'],
};
