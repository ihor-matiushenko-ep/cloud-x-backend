import 'source-map-support/register';

import { getProductsListHandler } from './handlers/getProductsList.handler';
import { getProductByIdHandler } from './handlers/getProductById.handler';

export {
  getProductsListHandler as getProductsList,
  getProductByIdHandler as getProductById,
};
