import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { createSynonym, getSynonyms, getSynonymsByWord, updateSynonym, deleteSynonym } from '../controllers/synonym.controller';

export const routes = (router: Router) => {
  
  router.post('/api/synonyms', createSynonym);
  
  router.get('/api/synonyms', getSynonyms);
  
  router.get('/api/synonyms/:id/words', getSynonymsByWord);
  
  router.put('/api/synonyms/:id', updateSynonym);
}