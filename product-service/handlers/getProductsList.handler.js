'use strict';

import 'source-map-support/register';

import { getProductsList } from '../api/getProductsList';
import { handleError } from '../utils/handleError';

export const getProductsListHandler = async (event, context, callback) => {
  const products = await getProductsList();

  handleError(products, callback);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(products),
  };

  callback(null, response);
};
