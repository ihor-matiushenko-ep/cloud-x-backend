describe('getProductsList handler', () => {
  const handler = require('../handlers/getProductsList.handler');
  const getProductsList = require('../api/getProductsList');
  const mockedProducts = require('./__mock__/productsList.json');
  test('should return products list', async () => {
    const result = JSON.stringify(mockedProducts);
    const getProductsListSpy = jest
      .spyOn(getProductsList, 'getProductsList')
      .mockReturnValue(result);
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };
    const testCallback = (res_error, res_success) => {
      expect(res_success).toEqual(response);
    };

    await handler.getProductsListHandler({}, {}, testCallback);

    expect(getProductsListSpy).toHaveBeenCalled();
  });
});
