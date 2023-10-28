import { Application } from 'express';
import synonymRoutes from './synonym.route';

// Centralize routes export, not necessary here but useful for larger projects
export default class Routes {
  constructor(app: Application) {
    app.use('/api/synonyms', synonymRoutes);
  }
}
