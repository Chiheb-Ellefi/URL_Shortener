import { StatusCodes } from "http-status-codes";
import { Sequelize } from "sequelize";
const ErrorHandlingMiddleware = (err, req, res, next) => {
  const customError = {
    message: err.message || "Internal server error, try again later.",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  if (err.name === "TokenExpiredError") {
    customError.message = err.message;
    customError.statusCode = StatusCodes.FORBIDDEN;
  }
  if (err instanceof Sequelize.UniqueConstraintError) {
    customError.message = err.parent.detail;
    customError.statusCode = StatusCodes.CONFLICT;
  }
  res.status(customError.statusCode).json(customError.message);
};

export default ErrorHandlingMiddleware;
