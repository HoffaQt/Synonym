import { Request, Response, NextFunction } from 'express';
import SynonymRepository from '../repositories/synonym.repository';

export default class SynonymController {

  getSynonymsByWord = (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: Set<string> = SynonymRepository.getInstance().getSynonyms(req.params.word);
      
      res.status(200).json({
        message: 'get OK',
        parameters: req.params.search,
        data: Array.from(response ?? new Set<string>())
      });
    } catch (error) {
      next(error);    
    }
  }
  
  getAllWords = (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: Set<string> = SynonymRepository.getInstance().getAllWords();
      
      res.status(200).json({
        message: 'get OK',
        data: Array.from(response ?? new Set<string>())
      });
    } catch (error) {
      next(error);    
    }
  }

  createSynonym = (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: Set<string> = SynonymRepository.getInstance().addSynonym(req.body.newWord, req.body.existingWord);
      
      res.status(201).json({
        message: 'create OK',
        body: req.body,
        data: Array.from(response ?? new Set<string>())
      });
    } catch (error) {
      next(error);    
    }
  }

  createWord = (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: string = SynonymRepository.getInstance().addWord(req.body.word);

      res.status(201).json({
        message: 'create OK',
        body: req.body.word,
        data: response
      });
    } catch (error) {
      next(error);    
    }
  }

  updateSynonym = (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: Set<string> = SynonymRepository.getInstance().updateSynonym(req.body.wordToBeUpdated, req.body.synonymWord);
      
      res.status(200).json({
        message: 'update OK',
        body: [req.body.wordToBeUpdated, req.body.synonymWord],
        data: Array.from(response ?? new Set<string>())
      });
    } catch (error) {
      next(error);    
    }
  }

  deleteWord = (req: Request, res: Response, next: NextFunction) => {
    try {
      SynonymRepository.getInstance().deleteWord(req.body.word);
      
      res.status(204).json({
        message: 'delete OK',
        body: req.body
      });
    } catch (error) {
      next(error);    
    }
  }
}