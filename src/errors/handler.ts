import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, request, response, next) => {
  console.error(err);
  return response.status(500).json({
    message: 'Internal Server Error',
  });
};

export default errorHandler;