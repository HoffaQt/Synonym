import { Request, Response, NextFunction } from 'express';

// Catch 404 and forward to error handler
const routeNotFoundError = ((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error('Route not found');
  next(err);
});

// Error handler, will print stacktrace if in development environment
const serverError = ((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({
      message: err.message,
      error: err,
      request: req
    });
  }
  else {
    res.status(500).json({
      message: err.message,
      error: {}
    });
  }
  next(err);
});

export { routeNotFoundError, serverError };