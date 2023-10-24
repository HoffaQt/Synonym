import dotenv from 'dotenv'
import path from 'path'

const config = dotenv.config({ path: path.join(__dirname, '../../.env'),
                debug: true,
                
              });

export default config;