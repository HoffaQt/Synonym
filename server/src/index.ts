import express, { Application } from 'express';
import cors from 'cors';
import Routes from './routes';
import { notFoundError, developmentError, productionError } from './middleware/errors.middleware';

// Seperate the app from the server configuration for
// seperation of concerns, maintainability and ease of testing
const app: Application = express();
app.use(express.json());
new Routes(app);

app.use(cors({
    origin: process.env.API_URL || 'http://localhost:8080',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Error handlers
app.use(notFoundError);
app.use(developmentError);
app.use(productionError);

export default app;
