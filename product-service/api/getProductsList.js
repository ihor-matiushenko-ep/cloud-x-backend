'use strict';

import 'source-map-support/register';

import productsList from '../data/productsList.json';

export const getProductsList = async () => {
  try {
    //TODO: replace with real API call
    return JSON.stringify(productsList);
  } catch (error) {
    console.error(error);
    return error;
  }
};
