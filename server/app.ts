import appInit from './src/index';
import 'dotenv/config';

const app = appInit;
const port = process.env.PORT || 8080;
const address = process.env.API_URL || 'http://localhost';

app.listen(port, () => {
  console.log(`Server running at ${address}:${port}`);
});
