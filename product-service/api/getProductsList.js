'use strict';

import 'source-map-support/register';

import productsList from '../data/productsList.json';
import { ERROR_PRODUCTS_LIST_FETCH_FAILED } from '../constants';

export const getProductsList = async () => {
  try {
    //TODO: replace with real API call
    return JSON.stringify(productsList);
  } catch (error) {
    console.error(`${ERROR_PRODUCTS_LIST_FETCH_FAILED}: `, error);
    return {
      error: {
        type: error.toString(),
        message: ERROR_PRODUCTS_LIST_FETCH_FAILED,
      },
    };
  }
};
