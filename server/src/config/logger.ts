import path from 'path';
import winston from 'winston';

class Logger {
  private readonly _logger: winston.Logger;
  private static _instance: Logger;
  
  private constructor() {
    this._logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp()
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ 
            filename: path.join(__dirname,'../../logs/combined.log'),
            level: 'info',
        }),
      ],
    });
  }
  
  static getInstance() {
    if (this._instance) {
        return this._instance;
    }

    this._instance = new Logger();
    return this._instance;
  }
  
  public get logger() {
    return this._logger;
  }
  
}
export default Logger;