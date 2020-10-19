import path, { resolve } from 'path';
import axios from 'axios';
import { books } from './sample_data';

const bestSellerCategories = [
  {
    id: 1000,
    name: 'Amazon Devices & Accessories',
    description:
      'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
    external_link:
      'https://www.amazon.com/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0',
    slug: 'amazon-devices',
    last_updated: null,
    icon: 'QqOutlined',
    active: true,
  },
  {
    id: 1001,
    name: 'Beauty & Personal Care',
    description:
      'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
    external_link:
      'https://www.amazon.com/Best-Sellers-Beauty/zgbs/beauty/ref=zg_bs_nav_0',
    slug: 'beauty',
    last_updated: null,
    icon: 'QqOutlined',
    active: true,
  },
  // {
  //   id: 1002,
  //   name: 'Books',
  //   description:
  //     'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
  //   external_link:
  //     'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_nav_0',
  //   slug: 'books',
  //   last_updated: null,
  //   icon: 'QqOutlined',
  //   active: true,
  // },
  // {
  //   id: 1003,
  //   name: 'CDs & Vinyl',
  //   description:
  //     'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
  //   external_link:
  //     'https://www.amazon.com/best-sellers-music-albums/zgbs/music/ref=zg_bs_nav_0',
  //   slug: 'music',
  //   last_updated: null,
  //   icon: 'QqOutlined',
  //   active: true,
  // },
];

async function turnCategoriesIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  // 1. Get list of categories
  // bestSellerCategories
  // 2. Loop over each one
  for (const category of bestSellerCategories) {
    // create a node for each category
    const nodeMeta = {
      id: createNodeId(`best-seller-${category.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'BestSeller',
        mediaType: 'application/json',
        contentDigest: createContentDigest(category),
      },
    };
    // 3. Create a node for that category
    actions.createNode({
      ...category,
      ...nodeMeta,
    });
  }
}

// set up the request parameters
const params = {
  api_key: '584EDA8081364F1A8F38393DD0EACB2B',
  type: 'bestsellers',
  output: 'json',
  language: 'en_US',
  customer_location: 'us',
  associate_id: 'my_associate_id',
};

async function fetchEndpoint(endpoint) {
  return axios
    .get('https://api.rainforestapi.com/request', {
      params: { ...params, url: endpoint },
    })
    .then((response) => response)
    .catch((error) => {
      // catch and print the error
      console.log(error);
      return error;
    });
}

async function turnProductsIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  console.log('➡️ Start generating product nodes');
  for (const category of bestSellerCategories) {
    // make the http GET request to Rainforest API
    const response = await fetchEndpoint(category.external_link);
    console.log('🚨 fetched ➡️', category.name);
    for (const product of response.data.bestsellers) {
      // create a node for each category
      const nodeMeta = {
        id: createNodeId(`${product.id}-${product.asin}`),
        parent: null,
        children: [],
        internal: {
          type: 'Product',
          mediaType: 'application/json',
          contentDigest: createContentDigest(product),
        },
      };
      // 3. Create a node for that category
      actions.createNode({
        ...product,
        ...nodeMeta,
      });
    }
  }
}

export async function sourceNodes(params) {
  // fetch a list of beers and source them into our gatsby API!
  await Promise.all([
    turnCategoriesIntoNodes(params),
    // turnProductsIntoNodes(params),
  ]);
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const singleBestSellerTemplate = path.resolve(
    './src/templates/SingleBestSeller.js'
  );
  const { data } = await graphql(`
    {
      allBestSeller(filter: { active: { eq: true } }) {
        nodes {
          active
          name
          slug
          description
        }
      }
    }
  `);
  // 3. Loop over each best seller and create a page
  data.allBestSeller.nodes.forEach((bestSeller) => {
    actions.createPage({
      component: singleBestSellerTemplate,
      // What is the URL for this new page??
      path: `/amazon-best-sellers/${bestSeller.slug}`,
      context: {
        name: bestSeller.name,
        slug: bestSeller.slug,
        description: bestSeller.description,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnCategoriesIntoPages(params)]);
}
