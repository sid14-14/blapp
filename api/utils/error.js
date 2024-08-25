//this is used to create custom error(when we don't really have a technically defined term equivalent error but we want to give some as an err)
export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
