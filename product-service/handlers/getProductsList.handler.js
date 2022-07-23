'use strict';

import 'source-map-support/register';

import { getProductsList } from '../api/getProductsList';

export const getProductsListHandler = async (event, context, callback) => {
  const productsList = await getProductsList();
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(productsList),
  };

  callback(null, response);
};
