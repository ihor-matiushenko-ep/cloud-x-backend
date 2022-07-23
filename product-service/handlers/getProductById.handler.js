'use strict';

import 'source-map-support/register';

import { getProductById } from '../api/getProductById';

export const getProductByIdHandler = async (event, context, callback) => {
  const { productId } = event.pathParameters;
  const product = await getProductById({ productId });

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(product),
  };

  callback(null, response);
};
