import { Application } from 'express';
import appInit from "./src/index";

const app: Application = appInit;
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});