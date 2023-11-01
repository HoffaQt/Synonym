import express, { Application } from 'express';
import cors from 'cors';
import Routes from './routes';
import { routeNotFoundError, serverError } from './middleware/errors.middleware';

// Seperate the app from the server configuration and initialization for
// seperation of concerns, maintainability and ease of testing
const app: Application = express();
const originUrl = process.env.API_URL || 'http://localhost:8080';
app.use(express.json());
app.use(
  cors({
    origin: originUrl,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

new Routes(app);

// Error handlers
app.use(routeNotFoundError);
app.use(serverError);

export default app;
