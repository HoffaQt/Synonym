import appInit from './src/index';
import 'dotenv/config';

const app = appInit;
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
