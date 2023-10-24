import express, { Request, Response, NextFunction } from 'express';
import Logger from './config/logger';
import { routes } from './routes/synonym.route';
import cors from 'cors'
const conf = require('dotenv').config();

const apiUrl = process.env.API_URL;
const expressPort = process.env.PORT || 8080;

const _logger = Logger.getInstance();
const app = express();

app.use(express.json());

app.use(cors({
  origin: conf.cors.origin,
  optionsSuccessStatus: conf.cors.optionsSuccessStatus
}));

app.use('/api/synonyms', routes);


app.get('/', (req: Request, res: Response) => {
  res.send('Empty route :)');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(expressPort, () => {
  console.log(`Server running at http://localhost:${expressPort}`);
});