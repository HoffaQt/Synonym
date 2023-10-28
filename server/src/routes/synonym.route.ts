import { Router } from 'express';
import SynonymController from '../controllers/synonym.controller';

class SynonymRoutes {
  router = Router();
  controller = new SynonymController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Retrieve all synonyms for a word with word
    this.router.get('/:word', this.controller.getSynonymsByWord);

    // Retrieve all words
    this.router.get('/', this.controller.getAllWords);

    // Create a new word and create synonym with existing words
    this.router.post('/synonym', this.controller.createSynonym);

    // Create a new word without synonyms
    this.router.post('/word', this.controller.createWord);

    // Update synonym for word
    this.router.put('/synonym', this.controller.updateSynonym);

    // Delete word and remove from synonym set
    this.router.delete('/word', this.controller.deleteWord);
  }
}
export default new SynonymRoutes().router;
