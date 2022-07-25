'use strict';

import 'source-map-support/register';

import { getProductById } from '../api/getProductById';
import { handleError } from '../utils/handleError';

export const getProductByIdHandler = async (event, context, callback) => {
  const { productId } = event.pathParameters;
  const product = await getProductById({ productId });

  handleError(product, callback);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(product),
  };

  callback(null, response);
};
