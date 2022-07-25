describe('getProductById handler', () => {
  const handler = require('../handlers/getProductById.handler');
  const getProductsList = require('../api/getProductsList');
  const getProductById = require('../api/getProductById');
  const mockedProducts = require('./__mock__/productsList.json');
  const testProductsList = JSON.stringify(mockedProducts);

  test('should return a specific product', async () => {
    const result = {
      count: 2,
      description: 'Funny Dinos figures',
      id: '2',
      price: 200,
      title: 'Funny Dinos figures',
      img: 'https://images.pexels.com/photos/3663060/pexels-photo-3663060.jpeg',
    };
    const getProductsListSpy = jest
      .spyOn(getProductsList, 'getProductsList')
      .mockReturnValue(testProductsList);
    const getProductByIdSpy = jest.spyOn(getProductById, 'getProductById');
    const testProductId = '2';

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };
    const testEvent = {
      pathParameters: {
        productId: testProductId,
      },
    };
    const testCallback = (res_error, res_success) => {
      expect(res_success).toEqual(response);
    };

    await handler.getProductByIdHandler(testEvent, {}, testCallback);

    expect(getProductsListSpy).toHaveBeenCalled();
    expect(getProductByIdSpy).toHaveBeenCalledWith({
      productId: testProductId,
    });
  });
});
