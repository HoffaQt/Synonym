import { Request, Response, NextFunction } from 'express';

// Catch 404 and forward to error handler
const notFoundError = ((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error('Not Found');
  next(err);
});

// Development error handler, will print stacktrace
const developmentError = ((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'dev') {
    res.status(500);
    res.json({
      message: err.message,
      error: err
    });
  }
});

// Production error handler, no stacktraces leaked to user
const productionError = ((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.json({
    message: err.message,
    error: {}
  });
});

export { notFoundError, developmentError, productionError };