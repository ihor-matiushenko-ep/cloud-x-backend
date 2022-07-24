export const handleError = (result, callback) => {
  if (result?.error) {
    const { type, message } = result['error'];
    const errorMessage = `${message}. ${type}`;
    return callback(errorMessage);
  }
};
