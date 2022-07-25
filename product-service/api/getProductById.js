'use strict';

import 'source-map-support/register';

import { getProductsList } from './getProductsList';
import { ERROR_PRODUCT_NOT_FOUND } from '../constants';

export const getProductById = async ({ productId }) => {
  try {
    const productsList = await getProductsList();
    const product = JSON.parse(productsList).find(
      (product) => product.id === productId
    );

    if (!product) {
      throw Error;
    }

    return product;
  } catch (error) {
    console.error(`${ERROR_PRODUCT_NOT_FOUND}: `, error);
    return {
      error: {
        type: error.toString(),
        message: ERROR_PRODUCT_NOT_FOUND,
      },
    };
  }
};
