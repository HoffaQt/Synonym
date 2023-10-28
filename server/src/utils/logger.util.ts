import winston from 'winston';

class Logger {
  private static instance: Logger;
  public readonly logger: winston.Logger;
  
  private constructor() {
    this.logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp()
      ),
      transports: [
        new winston.transports.Console(),
      ],
    });
  }
  
  static getInstance(): Logger {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }
  
}
export default Logger;