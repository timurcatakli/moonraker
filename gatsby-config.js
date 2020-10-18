import dotenv from 'dotenv';

dotenv.config({ path: 'env' });

export default {
  siteMetadata: {
    title: 'Moonraker',
    siteUrl: `http://www.moonraker.com`,
    description: 'Amazon Best Sellers',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#FF4949',
            black: '#2e2e2e',
            'font-family': 'Dosis',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
