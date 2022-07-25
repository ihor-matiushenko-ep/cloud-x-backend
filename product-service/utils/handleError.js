export const handleError = (result, callback, statusCode = 404) => {
  if (result?.error) {
    const { error } = result;

    return callback(null, {
      statusCode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error),
    });
  }
};
