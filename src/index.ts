import express, { Request, Response, NextFunction } from 'express';
import synonymRouter from './routes/synonymRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/synonym', synonymRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});