'use strict';

import 'source-map-support/register';

import { getProductsList } from './getProductsList';

export const getProductById = async ({ productId }) => {
  try {
    const productsList = await getProductsList();
    const product = JSON.parse(productsList).find(
      (product) => product.id === productId
    );
    return product;
  } catch (error) {
    console.error(error);
    return error;
  }
};
