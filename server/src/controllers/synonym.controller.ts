import { Request, Response } from 'express';
import { addSynonym } from '../services/synonym.service';


//POST '/'
export const createSynonym = (req: Request, res: Response) => {
  
  addSynonym(req.body.id, req.body.word);
  
  res.sendStatus(201);
};

//GET '/'
export const getSynonyms = (req: Request, res: Response) => {
  res.json([]);
};

//GET '/:word'
export const getSynonymsByWord = (req: Request, res: Response) => {
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