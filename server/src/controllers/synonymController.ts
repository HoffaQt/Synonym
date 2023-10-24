import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { Synonym } from '../models/synonymModel';
import { addSynonym } from '../services/synonymService';


//POST '/'
export const createSynonym = (req: Request, res: Response) => {
  
  addSynonym(req.body.word, req.body.synonym);
  
  res.sendStatus(201);
};

//GET '/'
export const getSynonyms = (req: Request, res: Response) => {
  res.json([]);
};

//GET '/:word'
export const getSynonymbyWord = (req: Request, res: Response) => {
  const synonym = "" //synonyms.find((synonym) => synonym.word === req.params.word);
  
  if (!synonym) {
    res.sendStatus(404);
  }
  res.json(synonym);
};

//PUT '/:word'
export const updateSynonym = (req: Request, res: Response) => {

  res.sendStatus(204);
};

//DELETE '/:id'
export const deleteSynonym = (req: Request, res: Response) => {

  res.sendStatus(204);
};