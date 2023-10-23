import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { Synonym } from '../models/synonymModel';



//POST '/'
export const createSynonym = (req: Request, res: Response) => {
  
  const synonym: Synonym = {
    groupId: req.body.group,
    word: req.body.word
  };
  
  //add to data structure check if it exists
  
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
  //TODO add database logic here
  //const synonym = //synonyms.find((synonym) => synonym.word === req.params.word);
  
  //if (!synonym) {
  //  res.sendStatus(404);
  //} 
  //else {
  //  synonym.word = req.body.word;
  //  synonym.group = req.body.group;
  //  res.sendStatus(204);
  //}
  res.sendStatus(204);
};

//DELETE '/:id'
export const deleteSynonym = (req: Request, res: Response) => {
  //TODO add database logic here
  //const synonym = //synonyms.find((synonym) => synonym.word === req.params.word);
  
  //if (!synonym) {
  //  res.sendStatus(404);
  //} 
  //else {
  //  synonyms = synonyms.filter((synonym) => synonym.word !== req.params.word);
  //  res.sendStatus(204);
  //}
  res.sendStatus(204);
};