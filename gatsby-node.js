import path, { resolve } from 'path';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({ path: '.env' });
const bestSellerCategories = [
  {
    identifier: 'amazon-devices',
    name: 'Amazon Devices & Accessories',
    description:
      'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
    external_link:
      'https://www.amazon.com/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0',
    slug: 'amazon_devices',
    last_updated: null,
    icon: 'BsChatDots',
    active: true,
  },
  {
    identifier: 'beauty',
    name: 'Beauty & Personal Care',
    description:
      'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
    external_link:
      'https://www.amazon.com/Best-Sellers-Beauty/zgbs/beauty/ref=zg_bs_nav_0',
    slug: 'beauty',
    last_updated: null,
    icon: 'BsChatSquareQuote',
    active: true,
  },
  {
    identifier: 'books',
    name: 'Books',
    description:
      'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
    external_link:
      'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_nav_0',
    slug: 'books',
    last_updated: null,
    icon: 'BsColumnsGap',
    active: true,
  },
  {
    identifier: 'music',
    name: 'CDs & Vinyl',
    description:
      'Best Seller single category description - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day.',
    external_link:
      'https://www.amazon.com/best-sellers-music-albums/zgbs/music/ref=zg_bs_nav_0',
    slug: 'music',
    last_updated: null,
    icon: 'BsEggFried',
    active: true,
  },
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
      id: createNodeId(`best-seller-${category.identifier}`),
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
  api_key: process.env.RAINFOREST_API_KEY,
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
  cache,
}) {
  console.log('➡️ Start generating product nodes');
  // ----------------
  for (const category of bestSellerCategories) {
    const cacheKey = category.identifier;
    let cachedData = await cache.get(cacheKey);
    if (!cachedData) {
      console.log('👎 Cache NOT EXIST');
      const response = await fetchEndpoint(category.external_link);
      cachedData = {
        [category.identifier]: {
          created: Date.now(),
          data: response.data.bestsellers,
        },
      };
    } else {
      console.log('👍 Cache EXIST');
    }
    console.log('🚀', cachedData);
    for (const product of cachedData[category.identifier].data) {
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
        identifier: category.identifier,
        ...product,
        ...nodeMeta,
      });
    }
    await cache.set(cacheKey, cachedData);
  }

  // ----------------
}

export async function sourceNodes(params) {
  // fetch a list of beers and source them into our gatsby API!
  await Promise.all([
    turnCategoriesIntoNodes(params),
    turnProductsIntoNodes(params),
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
          identifier
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
        identifier: bestSeller.identifier,
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
