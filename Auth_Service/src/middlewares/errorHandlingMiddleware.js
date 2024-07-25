import { StatusCodes } from "http-status-codes";

export const errorHandlingMiddleware = async (err, req, res, next) => {
  const customError = {
    message: err.message || "Something went wrong, please try again later.",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  if (err.name == "TokenExpiredError") {
    customError.message = err.message;
    customError.statusCode = StatusCodes.UNAUTHORIZED;
  }
  if (err.code == 11000) {
    customError.message = `Duplicate item in ${Object.keys(err.keyValue).map(
      (e) => `${e + " : " + err.keyValue[e]}`
    )}`;
    customError.statusCode = StatusCodes.UNAUTHORIZED;
  }
  res.status(customError.statusCode).json(customError.message);
};
