import express, { Application, Request, Response, NextFunction } from 'express';
import Logger from './src/config/logger';
import './src/controllers/synonym.controller';
import Server from "./src/index";

const PORT = process.env.PORT || 8080;
const app: Application = express();
const server: Server = new Server(app);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err: Error = new Error('Not Found');
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'dev') {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line @typescript-eslint/no-unused-vars
  res.status(500);
  res.json({
    message: err.message,
    error: {}
    });
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'dev') Logger.getInstance().logger.debug(`Server running at http://localhost:${PORT}`);
  console.log(`Server running at http://localhost:${PORT}`);
});