import { configDotenv } from 'dotenv';
import path from 'path';

const config = configDotenv({
    path: path.join(__dirname, '../../.env'),
                debug: true,
              });

export default config;