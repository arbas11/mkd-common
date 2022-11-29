import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // check status code
  const statusCode = 500;
  // check error message
  const status = "error";

  let message = err.message;

  if (err.name === "KafkaJSNumberOfRetriesExceeded") {
    message = "Error From Broker Connection";
    process.exit(1);
  }
  //   respone error
  res.status(statusCode).json({
    status: status,
    message: message,
  });
};

// export const globalErrorHandler = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // check status code
//   err.statusCode = err.statusCode || 500;
//   // check error message
//   err.status = err.status || "error";
//   //   respone error
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message,
//   });
// };
